package io.github.playground;

import io.github.playground.dto.Problem;
import io.github.playground.repo.ProblemRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

@SpringBootTest
public class ProblemRepositoryTest {
    @Autowired
    ProblemRepository problemRepository;

    @Test
    void 모든_문제를_JSON에서_잘_불러온다() {
        List<Problem> problems = problemRepository.findAll();

        assertThat(problems).isNotEmpty();
        assertThat(problems).hasSizeGreaterThanOrEqualTo(3);

        Problem first = problems.get(0);
        assertThat(first.getId()).isEqualTo(1L);
        assertThat(first.getTitle()).isEqualTo("Console로 문자열 입력받기");
    }

    @Test
    void ID로_문제를_조회할_수_있다() {
        Problem problem1 = problemRepository.findById(1L).orElseThrow();
        assertThat(problem1.getTitle()).contains("Console");

        Problem problem3 = problemRepository.findById(3L).orElseThrow();
        assertThat(problem3.getLevel()).isEqualTo("medium");
    }
}
