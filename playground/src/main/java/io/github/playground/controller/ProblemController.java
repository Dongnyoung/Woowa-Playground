package io.github.playground.controller;

import io.github.playground.dto.Problem;
import io.github.playground.repo.ProblemRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/problems")
public class ProblemController {

    private final ProblemRepository problemRepository;

    public ProblemController(ProblemRepository problemRepository) {
        this.problemRepository = problemRepository;
    }

    @GetMapping
    public List<Problem> findAll(){
        return problemRepository.findAll();
    }

    @GetMapping("/{id}")
    public Problem findById(@PathVariable Long id){
       Optional<Problem> problem =problemRepository.findById(id);
       return problem.orElse(null);
    }
}
