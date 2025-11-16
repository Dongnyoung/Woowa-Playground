package io.github.playground.service;

import io.github.playground.dto.SubmissionRequest;
import io.github.playground.dto.SubmissionResponse;
import io.github.playground.repo.ProblemRepository;
import org.springframework.stereotype.Service;

@Service
public class SubmissionService {
    private final ProblemRepository problemRepository;

    public SubmissionService(ProblemRepository problemRepository) {
        this.problemRepository = problemRepository;
    }

    public SubmissionResponse evaluate(SubmissionRequest request) {
        if (request.getProblemId() == null || request.getSourceCode() == null) {
            return new SubmissionResponse("ERROR", "problemId와 sourceCode는 필수입니다.");
        }

        Long problemId = request.getProblemId();
        String source = request.getSourceCode();

        return switch (problemId.intValue()) {
            case 1 -> evaluateProblem1(source);
            case 2 -> evaluateProblem2(source);
            case 3 -> evaluateProblem3(source);
            default -> new SubmissionResponse("ERROR", "지원하지 않는 문제 ID입니다: " + problemId);
        };
    }

    // 1번 문제: Console 사용, Scanner/System.out 금지
    private SubmissionResponse evaluateProblem1(String source) {
        boolean usesScanner = contains(source, "Scanner");
        boolean usesSystemOut = contains(source, "System.out");
        boolean usesConsoleRead = contains(source, "Console.readLine");
        boolean usesConsolePrint = contains(source, "Console.println");

        if (usesScanner) {
            return new SubmissionResponse("FAIL", "Scanner를 사용하면 안 됩니다. Console API를 사용해주세요.");
        }
        if (usesSystemOut) {
            return new SubmissionResponse("FAIL", "System.out.println 대신 Console.println을 사용해야 합니다.");
        }
        if (!usesConsoleRead) {
            return new SubmissionResponse("FAIL", "Console.readLine() 사용이 감지되지 않았습니다.");
        }
        if (!usesConsolePrint) {
            return new SubmissionResponse("FAIL", "Console.println() 사용이 감지되지 않았습니다.");
        }
        return new SubmissionResponse("PASS", "형식 검사를 통과했습니다. (로직 검증은 추후 확장 예정)");
    }

    // 2번 문제: Randoms 사용, Math.random / ThreadLocalRandom 금지
    private SubmissionResponse evaluateProblem2(String source) {
        boolean usesRandoms = contains(source, "Randoms.pickNumberInRange");
        boolean usesThreadLocalRandom = contains(source, "ThreadLocalRandom");
        boolean usesMathRandom = contains(source, "Math.random");

        if (usesThreadLocalRandom || usesMathRandom) {
            return new SubmissionResponse("FAIL", "ThreadLocalRandom, Math.random() 대신 Randoms.pickNumberInRange()를 사용해야 합니다.");
        }
        if (!usesRandoms) {
            return new SubmissionResponse("FAIL", "Randoms.pickNumberInRange() 사용이 감지되지 않았습니다.");
        }
        return new SubmissionResponse("PASS", "형식 검사를 통과했습니다. (로직 검증은 추후 확장 예정)");
    }

    // 3번 문제: Inputs 사용
    private SubmissionResponse evaluateProblem3(String source) {
        boolean usesInputs = contains(source, "Inputs.");
        boolean usesConsoleOnly = contains(source, "Console.readLine");

        if (!usesInputs) {
            return new SubmissionResponse("FAIL", "camp.woowa.Inputs 유틸을 활용해서 구현해 보세요.");
        }
        // 그냥 Console.readLine으로만 직접 파싱하는 경우를 막고 싶다면
        if (usesConsoleOnly && !usesInputs) {
            return new SubmissionResponse("FAIL", "직접 Console.readLine으로만 처리하지 말고 Inputs를 활용하세요.");
        }
        return new SubmissionResponse("PASS", "형식 검사를 통과했습니다. (로직 검증은 추후 확장 예정)");
    }

    private boolean contains(String source, String keyword) {
        return source != null && source.contains(keyword);
    }
}
