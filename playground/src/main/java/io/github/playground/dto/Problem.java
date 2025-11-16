package io.github.playground.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Problem {
    private final Long id;
    private final String title;
    private final String level;
    private final String shortDescription; //짧은설명
    private final String description; //문제 + 요구사항
    private final String initialCode; //import

    public Problem(Long id,
                   String title,
                   String level,
                   String shortDescription,
                   String description,
                   String initialCode) {
        this.id = id;
        this.title = title;
        this.level = level;
        this.shortDescription = shortDescription;
        this.description = description;
        this.initialCode = initialCode;
    }
}
