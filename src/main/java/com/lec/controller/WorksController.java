package com.lec.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WorksController {
	
	@GetMapping("/works")
	public String getWorksPage() {
		return "works/works";
	}
	

}
