package com.lec.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.lec.domain.Recruit;
import com.lec.service.RecruitService;

@Controller
public class RecruitController {
	
	@Autowired
	private RecruitService recruitService;
	
	@GetMapping("/recruit")
	public String getRecruitPage() {
		return "recruit/recruit";
	}
	
	@GetMapping("/insertRecruit")
	public String getInsertRecruit() {
		return "recruit/insertRecruit";
	}
	
	@PostMapping("insertRecruit")
	public String insertRecruit(Recruit recruit) {
		recruitService.insertRecruit(recruit);
		return "recruit/recruit";
	}
	

}







