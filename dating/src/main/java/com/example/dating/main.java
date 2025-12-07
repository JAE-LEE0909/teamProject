package com.example.dating;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class main {
    @GetMapping("/main")
    @ResponseBody
    public String index() {
        System.out.println("testINsert tset!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        return "MainTest";
    }
}