package com.example.dating.entity;
import jakarta.persistence.*;


// 조건 검색 테스트용 Entity

@Entity
@Table(name = "match_candidate")
public class MatchCandidate {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "match_candidate_seq"
    )
    @SequenceGenerator(
            name = "match_candidate_seq",
            sequenceName = "MATCH_CANDIDATE_SEQ",
            allocationSize = 1
    )
    private Long id;

    @Column(nullable=false)
    private String name; // 이름

    @Column(nullable=false)
    private int age; // 나이

    @Column(nullable=false)
    private int height; // 키

    @Column(nullable=false)
    private int distanceKm; // 거리

    protected MatchCandidate() {} // 생성자 / protect로 JPA 접근, 외부 new MatchCandidate() 막음

    public MatchCandidate(String name, int age, int height, int distanceKm) { // 매개변수 생성자
        this.name = name;
        this.age = age;
        this.height = height;
        this.distanceKm = distanceKm;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public int getAge() { return age; }
    public int getHeight() { return height; }
    public int getDistanceKm() { return distanceKm; }


}
