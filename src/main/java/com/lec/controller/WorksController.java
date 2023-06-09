package com.lec.controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;

import com.lec.domain.Member;
import com.lec.domain.PagingInfo;
import com.lec.domain.Works;
import com.lec.service.WorksService;

@Controller
@SessionAttributes({"member", "pagingInfo"})
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
	
	
	@GetMapping("/works")
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
		
		return "works/works";
	}
	
	
	@GetMapping("/insertWorks")
	public String insertWorksView(@ModelAttribute("member") Member member) {
		if(member.getId() == null) {
			return "redirect:login";
		}
		return "works/insertWorks";
	}
	
	@PostMapping("/insertWorks")
	public String insertWorks(@ModelAttribute("member") Member member, Works works) throws Exception {
		if(member.getId() == null) {
			return "redirect:login";
		}
		// File Upload
		MultipartFile uploadFile = works.getUploadFile();
		if(!uploadFile.isEmpty()) {
			String fileName = uploadFile.getOriginalFilename();
			
		}
		
	}
	
	
	
	

}











