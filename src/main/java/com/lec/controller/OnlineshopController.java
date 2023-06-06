package com.lec.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OnlineshopController {
	
	@GetMapping("/onlineshop")
	public String GetOnlineshopPage() {
		return "onlineshop/onlineshop";
	}

}


