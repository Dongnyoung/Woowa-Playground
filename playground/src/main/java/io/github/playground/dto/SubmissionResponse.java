package io.github.playground.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SubmissionResponse {

    private String status;   // PASS / FAIL / ERROR
    private String message;  // 상세 메시지

    public SubmissionResponse() {
    }

    public SubmissionResponse(String status, String message) {
        this.status = status;
        this.message = message;
    }
}