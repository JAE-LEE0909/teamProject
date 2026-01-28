package com.example.dating.controller;

import com.example.dating.entity.MatchCandidate;
import com.example.dating.repository.MatchCandidateRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@RestController
public class main {

    private final MatchCandidateRepository matchCandidateRepository; //

    public main(MatchCandidateRepository matchCandidateRepository){
        this.matchCandidateRepository = matchCandidateRepository;
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

    // 조건 검색 테스트 Controller
    @GetMapping("/api/matches")
    public List<MatchCandidate> getMatches(
            @RequestParam(name = "ageMin") int ageMin,
            @RequestParam(name = "ageMax") int ageMax,
            @RequestParam(name = "heightMin") int heightMin,
            @RequestParam(name = "heightMax") int heightMax,
            @RequestParam(name = "distMin") int distMin,
            @RequestParam(name = "distMax") int distMax
    ) {
        // 최소 검증
        if (ageMin > ageMax || heightMin > heightMax || distMin > distMax) {
            throw new IllegalArgumentException("min 값은 max 값보다 클 수 없습니다.");
        }

        System.out.println("ageMin=" + ageMin);
        System.out.println("ageMax=" + ageMax);
        System.out.println("heightMin=" + heightMin);
        System.out.println("heightMax=" + heightMax);
        System.out.println("distMin=" + distMin);
        System.out.println("distMax=" + distMax);

        return matchCandidateRepository.findByAgeBetweenAndHeightBetweenAndDistanceKmBetween(
                ageMin, ageMax, heightMin, heightMax, distMin, distMax
        );
    }



}
