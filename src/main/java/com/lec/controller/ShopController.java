package com.lec.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ShopController {
	
	@GetMapping("/shopManage")
	public String getShopManagePage() {
		return "onlineshop/shopManage";
	}
	
	@GetMapping("/productManage")
	public String getProductManagePage() {
		return "onlineshop/productManage";
	}
	

}
