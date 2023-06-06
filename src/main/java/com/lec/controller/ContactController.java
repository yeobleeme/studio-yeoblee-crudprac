package com.lec.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.Getter;

@Controller
public class ContactController {
	
	@GetMapping("/contact")
	public String getContactPage() {
		return "contact/contact";
	}
	

}
