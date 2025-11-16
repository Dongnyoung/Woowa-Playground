package io.github.playground.controller;

import io.github.playground.dto.SubmissionRequest;
import io.github.playground.dto.SubmissionResponse;
import io.github.playground.repo.ProblemRepository;
import io.github.playground.service.SubmissionService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/submissions")
public class SubmissionController {

    private final SubmissionService submissionService;

    public SubmissionController(SubmissionService submissionService) {
        this.submissionService = submissionService;
    }

    @PostMapping
    public SubmissionResponse submit(@RequestBody SubmissionRequest request) {
        return submissionService.evaluate(request);
    }


}
