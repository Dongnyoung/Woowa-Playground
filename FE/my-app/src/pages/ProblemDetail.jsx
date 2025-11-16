// src/pages/ProblemDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// 임시 목업. ProblemList의 MOCK_PROBLEMS와 맞춰서 사용
const MOCK_PROBLEM_DETAILS = {
  1: {
    id: 1,
    title: "Console로 문자열 입력받기",
    description: `
[목표]
- Console.readLine()과 Console.println()을 사용해
  사용자의 이름을 입력받고, "Hello, {이름}!"을 출력하세요.

[요구사항]
- Scanner를 사용하지 마세요.
- System.out.println 대신 Console.println을 사용하세요.
`,
    initialCode: `import camp.woowa.Console;

public class Solution {
    public static void main(String[] args) {
        // TODO: 여기에 코드를 작성하세요.
    }
}
`,
  },
  2: {
    id: 2,
    title: "Randoms로 숫자 뽑기",
    description: `
[목표]
- Randoms.pickNumberInRange(1, 9)를 사용해 1~9 사이 정수를 출력하세요.

[요구사항]
- ThreadLocalRandom, Math.random() 등을 사용하지 마세요.
- Randoms 활용이 필수입니다.
`,
    initialCode: `import camp.woowa.Console;
import camp.woowa.Randoms;

public class Solution {
    public static void main(String[] args) {
        // TODO: 여기에 코드를 작성하세요.
    }
}
`,
  },
  3: {
    id: 3,
    title: "Inputs로 양수만 입력받기",
    description: `
[목표]
- 입력받은 정수가 1 이상인지 검사하고, 1 미만이면 예외를 던지는 프로그램을 작성하세요.

[요구사항]
- camp.woowa.Inputs를 활용해서 구현해 보세요.
`,
    initialCode: `import camp.woowa.Console;
import camp.woowa.Inputs;

public class Solution {
    public static void main(String[] args) {
        // TODO: 여기에 코드를 작성하세요.
    }
}
`,
  },
};

export default function ProblemDetail() {
  const { problemId } = useParams();
  const [problem, setProblem] = useState(null);
  const [sourceCode, setSourceCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    // TODO: 나중에는 백엔드에서 문제 상세 조회
    // fetch(`/api/problems/${problemId}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setProblem(data);
    //     setSourceCode(data.initialCode ?? "");
    //   });

    const data = MOCK_PROBLEM_DETAILS[problemId];
    if (data) {
      setProblem(data);
      setSourceCode(data.initialCode || "");
    }
  }, [problemId]);

  if (!problem) {
    return (
      <div className="page">
        <p>문제를 찾을 수 없습니다.</p>
      </div>
    );
  }

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setResult(null);

    try {
      // TODO: 여기서 백엔드 API 호출할 예정
      // const res = await fetch("/api/submissions", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     problemId: problem.id,
      //     sourceCode,
      //   }),
      // });
      // const data = await res.json();
      // setResult(data);

      // 지금은 임시로 문자열 검사만 흉내:
      const usesConsole = sourceCode.includes("Console.readLine")
        || sourceCode.includes("Console.println");
      const usesScanner = sourceCode.includes("Scanner");

      if (usesScanner) {
        setResult({
          status: "FAIL",
          message: "Scanner를 사용하면 안 됩니다. Console API를 사용해주세요.",
        });
      } else if (!usesConsole) {
        setResult({
          status: "FAIL",
          message: "Console API 사용이 감지되지 않았습니다.",
        });
      } else {
        setResult({
          status: "PASS",
          message: "형식 검사를 통과했습니다. (실제 로직 검증은 나중에 구현)",
        });
      }
    } catch (e) {
      console.error(e);
      setResult({
        status: "ERROR",
        message: "제출 중 오류가 발생했습니다.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <h1>{problem.title}</h1>

      <section className="problem-detail">
        <h2>문제 설명</h2>
        <pre className="problem-description">
{problem.description}
        </pre>
      </section>

      <section className="editor-section">
        <h2>코드 작성</h2>
        <textarea
          className="code-editor"
          value={sourceCode}
          onChange={(e) => setSourceCode(e.target.value)}
          spellCheck={false}
        />

        <button
          className="primary-button"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "채점 중..." : "제출하기"}
        </button>

        {result && (
          <div className={`result-box result-${result.status.toLowerCase()}`}>
            <strong>결과: {result.status}</strong>
            <p>{result.message}</p>
          </div>
        )}
      </section>
    </div>
  );
}
