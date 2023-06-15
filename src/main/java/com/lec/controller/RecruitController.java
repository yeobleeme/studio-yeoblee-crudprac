package com.lec.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.lec.domain.Member;
import com.lec.domain.Recruit;
import com.lec.service.RecruitService;

@Controller
public class RecruitController {
	
	@Autowired
	private RecruitService recruitService;
	
	@Autowired
	Environment environment;
	
	@ModelAttribute("member")
	public Member setMember() {
		return new Member();
	}
		
	@GetMapping("/recruit")
	public String getRecruitPage(Model model) {
		List<Recruit> recruitList = recruitService.getRecruitList();
	    model.addAttribute("recruitList", recruitList);
	    return "recruit/recruit";
	}
	
	@GetMapping("/getRecruit")
	public String getRecruit(Recruit recruit, Model model) {
		model.addAttribute("recruit", recruitService.getRecruit(recruit));
		return "recruit/getRecruit";
	}
	
	@GetMapping("/adminRecruitList")
	public String adminRecruitView(Model model, Recruit recruit) {
		List<Recruit> recruitList = recruitService.getRecruitList();
	    model.addAttribute("recruitList", recruitList);
		return "recruit/adminRecruitList";
	}
	
	@GetMapping("/insertRecruit")
	public String getInsertRecruit(Model model, HttpSession session) {
		Member member = (Member) session.getAttribute("member");
		 if (member != null && "ADMIN".equals(member.getRole())) {
	            return "recruit/insertRecruit";
	        } else {
	            return "info/accessDenied";
	        }
		}
	
	@PostMapping("insertRecruit")
	public String insertRecruit(Recruit recruit) {
		recruitService.insertRecruit(recruit);
		return "redirect:recruit";
	}
	
	@GetMapping("/updateRecruit")
	public String updateRecruit(Recruit recruit, Model model) {
		model.addAttribute("recruit", recruitService.getRecruit(recruit));
		return "recruit/updateRecruit";
	}
	
	@PostMapping("/updateRecruit")
	public String updateRecruit(Member member, Recruit recruit) {
		
		recruitService.updateRecruit(recruit);
		return "redirect:recruit";
	}
	
	@GetMapping("/deleteRecruit")
	public String deleteRecruit(Member member, Recruit recruit) {
		
		recruitService.deleteRecruit(recruit);
		return "redirect:adminRecruitList";
	}
	

}







