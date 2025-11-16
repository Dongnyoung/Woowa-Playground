package io.github.playground;

import io.github.playground.dto.SubmissionRequest;
import io.github.playground.dto.SubmissionResponse;
import io.github.playground.service.SubmissionService;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

public class SubmissionServiceTest {
    SubmissionService submissionService = new SubmissionService(null);

    @Test
    void 문제1_Console을_사용하면_PASS() {
        String code = """
                import io.github.dongnyoung.Console;;

                public class Solution {
                    public static void main(String[] args) {
                        Console.println("이름을 입력하세요:");
                        String name = Console.readLine();
                        Console.println("Hello, " + name + "!");
                    }
                }
                """;

        SubmissionRequest request = new SubmissionRequest(1L, code);
        SubmissionResponse response = submissionService.evaluate(request);

        assertThat(response.getStatus()).isEqualTo("PASS");
    }

    @Test
    void 문제1_Scanner_사용하면_FAIL() {
        String code = """
                import java.util.Scanner;

                public class Solution {
                    public static void main(String[] args) {
                        Scanner sc = new Scanner(System.in);
                        String name = sc.nextLine();
                        System.out.println(name);
                    }
                }
                """;

        SubmissionRequest request = new SubmissionRequest(1L, code);
        SubmissionResponse response = submissionService.evaluate(request);

        assertThat(response.getStatus()).isEqualTo("FAIL");
        assertThat(response.getMessage()).contains("Scanner");
    }

    @Test
    void 문제2_Randoms_사용하면_PASS() {
        String code = """
                import io.github.dongnyoung.Console;
                import io.github.dongnyoung.Randoms;

                public class Solution {
                    public static void main(String[] args) {
                        int n = Randoms.pickNumberInRange(1, 9);
                        Console.println("n = " + n);
                    }
                }
                """;

        SubmissionRequest request = new SubmissionRequest(2L, code);
        SubmissionResponse response = submissionService.evaluate(request);

        assertThat(response.getStatus()).isEqualTo("PASS");
    }

    @Test
    void 문제2_Math_random_사용하면_FAIL() {
        String code = """
                public class Solution {
                    public static void main(String[] args) {
                        double n = Math.random();
                    }
                }
                """;

        SubmissionRequest request = new SubmissionRequest(2L, code);
        SubmissionResponse response = submissionService.evaluate(request);

        assertThat(response.getStatus()).isEqualTo("FAIL");
        assertThat(response.getMessage()).contains("Math.random");
    }

    @Test
    void 문제3_Inputs_사용하면_PASS() {
        String code = """
                import io.github.dongnyoung.Console;
                import io.github.dongnyoung.Inputs;

                public class Solution {
                    public static void main(String[] args) {
                        int n = Inputs.readPositiveInt("정수 입력: ");
                        Console.println("n = " + n);
                    }
                }
                """;

        SubmissionRequest request = new SubmissionRequest(3L, code);
        SubmissionResponse response = submissionService.evaluate(request);

        assertThat(response.getStatus()).isEqualTo("PASS");
    }
}
