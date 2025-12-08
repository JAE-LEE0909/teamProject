package com.example.dating.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class main {
    @GetMapping("/main")
    @ResponseBody
    public String index() {
        System.out.println("testINsert tset!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        return "MainTest";
    }


    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }
}
