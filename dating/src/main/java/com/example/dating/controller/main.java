package com.example.dating.controller;

import com.example.dating.entity.student;
import com.example.dating.repository.StudentRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class main {


    private final StudentRepository studentRepository;

    public main (StudentRepository studentRepository){
        this.studentRepository = studentRepository;
    }

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

    @GetMapping("/test")
    public student cloudConnectTest (){
        String name = "aa";
        return studentRepository.findById(1L).orElseThrow(() -> new RuntimeException("student not found: " + name));
    }
}
