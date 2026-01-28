package com.example.dating.repository;

import com.example.dating.entity.MatchCandidate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MatchCandidateRepository extends JpaRepository<MatchCandidate, Long> {
    List<MatchCandidate> findByAgeBetweenAndHeightBetweenAndDistanceKmBetween(
            int ageMin, int ageMax,
            int heightMin, int heightMax,
            int distMin, int distMax
    );

}
