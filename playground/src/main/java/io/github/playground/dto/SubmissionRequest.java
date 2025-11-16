package io.github.playground.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SubmissionRequest {
    private Long problemId;
    private String sourceCode;

    public SubmissionRequest() {
    }

    public SubmissionRequest(Long problemId, String sourceCode) {
        this.problemId = problemId;
        this.sourceCode = sourceCode;
    }
}
