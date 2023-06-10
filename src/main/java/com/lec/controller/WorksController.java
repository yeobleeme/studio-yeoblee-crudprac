package com.lec.controller;

import java.io.File;
import java.io.FileInputStream;
import java.net.URLEncoder;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;

import com.lec.domain.Member;
import com.lec.domain.PagingInfo;
import com.lec.domain.Works;
import com.lec.service.WorksService;

@Controller
@SessionAttributes({"pagingInfo"})
public class WorksController {
	
	@Autowired
	private WorksService worksService;
	
	@Autowired
	Environment environment;
	
	public PagingInfo pagingInfo = new PagingInfo();
	
	@Value("${path.upload}")
	public String uploadFolder;
	
	@Value("${path.download}")
	public String downFolder;
	
	@ModelAttribute("member")
	public Member setMember() {
		return new Member();
	}
	
	
	@GetMapping("/getWorksList")
	public String getWorksList(Model model,
			@RequestParam(defaultValue = "0") int curPage,
			@RequestParam(defaultValue = "10") int rowSizePerPage,
			@RequestParam(defaultValue = "title") String searchType,
			@RequestParam(defaultValue = "") String searchWord) {
		
		Pageable pageable = PageRequest.of(curPage, rowSizePerPage, Sort.by(searchType).ascending());
		Page<Works> pagedResult = worksService.getWorksList(pageable, searchType, searchWord);
		
		int totalRowCount = pagedResult.getNumberOfElements();
		int totalPageCount = pagedResult.getTotalPages();
		int pageSize = pagingInfo.getPageSize();
		int startPage = curPage / pageSize * pageSize + 1;
		int endPage = startPage + pageSize + 1;
		endPage = endPage > totalPageCount ? (totalPageCount > 0 ? totalPageCount : 1) : endPage;
		
		pagingInfo.setCurPage(curPage);
		pagingInfo.setTotalRowCount(totalRowCount);
		pagingInfo.setTotalPageCount(totalPageCount);
		pagingInfo.setStartPage(startPage);
		pagingInfo.setEndPage(endPage);
		pagingInfo.setSearchType(searchType);
		pagingInfo.setSearchWord(searchWord);
		
		model.addAttribute("pagingInfo", pagingInfo);
		model.addAttribute("pagedResult", pagedResult);
		model.addAttribute("pageable", pageable);
		model.addAttribute("cp", curPage);
		model.addAttribute("sp", startPage);
		model.addAttribute("ep", endPage);
		model.addAttribute("ps", pageSize);
		model.addAttribute("rp", rowSizePerPage);
		model.addAttribute("tp", totalPageCount);
		model.addAttribute("st", searchType);
		model.addAttribute("sw", searchWord);
		
		return "works/getWorksList";
	}
	
	
	@GetMapping("/insertWorks")
    public String getAdminPage(Model model, HttpSession session) {
        Member member = (Member) session.getAttribute("member");
        if (member != null && "ADMIN".equals(member.getRole())) {
            return "works/insertWorks";
        } else {
            return "info/accessDenied";
        }
    }
	
//	@GetMapping("/insertWorks")
//	public String insertWorksView() {
//		return "works/insertWorks";
//	}
	
//	@GetMapping("/insertWorks")
//	public String insertWorksView(@ModelAttribute("member") Member member) {
//		if(member.getId() == null) {
//			return "redirect:login";
//		}
//		return "works/insertWorks";
//	}
	
	@PostMapping("/insertWorks")
	public String insertWorks(@ModelAttribute("member") Member member, Works works) throws Exception {
		if(member.getId() == null) {
			return "redirect:login";
		}
		// File Upload
		MultipartFile uploadFile = works.getUploadFile();
		
		if(!uploadFile.isEmpty()) {
			String fileName = uploadFile.getOriginalFilename();
			uploadFile.transferTo(new File(uploadFolder + fileName));
			works.setFileName(fileName);
		}
		worksService.insertWorks(works);
		return "redirect:getWorksList";
	}
	
	
	@GetMapping("/getWorks")
	public String getWorks(@ModelAttribute("member") Member member, Works works, Model model) {
		if(member.getId() == null) {
			return "redirect:login";
		}
		worksService.updateReadCount(works);
		model.addAttribute("works", worksService.getWorks(works));
		return "works/getWorks";
	}
	
	
	@PostMapping("/updateWorks")
	public String updateWorks(@ModelAttribute("member") Member member, Works works) {
		if(member.getId() == null) {
			return "redirect:login";
		}
		worksService.updateWorks(works);
		return "forward:getWorksList";
	}
	
	@GetMapping("/deleteWorks")
	public String deleteWorks(@ModelAttribute("member") Member member, Works works) {
		if(member.getId() == null) {
			return "redirect:login";
		}
		worksService.deleteWorks(works);
		return "forward:getWorksList";
	}
	
	
	@RequestMapping("/download")
	public void download(HttpServletRequest req, HttpServletResponse res) throws Exception {
		
		req.setCharacterEncoding("utf-8");
		String fileName = req.getParameter("fn");
		
		String fromPath = uploadFolder + fileName;
		String toPath = uploadFolder + fileName;
		
		byte[] b = new byte[4096];
		File f = new File(toPath);
		FileInputStream fis = new FileInputStream(fromPath);
		
		String sMimeType = req.getSession().getServletContext().getMimeType(fromPath);  // mimetype = file type : pdf, exe, txt ...
		if(sMimeType == null) sMimeType = "application/octet-stream";
		
		String sEncoding = new String(fileName.getBytes("utf-8"), "8859-1");
		String sEncoding1 = URLEncoder.encode(fileName, "utf-8");
		
		res.setContentType(sMimeType);
		res.setHeader("Content-Transfer-Encoding", "binary");
		res.setHeader("Content-Disposition", "attachmemnt; filename = " + sEncoding1);
		
		int numRead;
		ServletOutputStream os = res.getOutputStream();
		
		while((numRead=fis.read(b, 0, b.length)) != -1) {
			os.write(b, 0, numRead);
		}
		os.flush();
		os.close();
		fis.close();
		
//		return "redirect:getWorksList";
	}
	
	public int updateView(Works works) {
		return worksService.updateReadCount(works);
	}
	
	

}











