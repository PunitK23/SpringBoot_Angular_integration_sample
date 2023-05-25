package com.punitit.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class WelcomeMsgRestController {
	
	@GetMapping("/welcome")
	public String getWelcomeMsg() {
		String msg = "Welcome to My World...!";
		
		return msg;
		
	}

}
