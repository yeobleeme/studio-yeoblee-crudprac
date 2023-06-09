package com.lec.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.lec.domain.Member;

@Controller
public class AdminController {
	
//	@GetMapping("/admin")
//	public String getAdminPage() {
//		return "admin/admin";
//	}
	
	@GetMapping("/admin")
    public String getAdminPage(Model model, HttpSession session) {
        Member member = (Member) session.getAttribute("member");
        if (member != null && "ADMIN".equals(member.getRole())) {
            return "admin/admin";
        } else {
            return "info/accessDenied";
        }
    }

}

	





