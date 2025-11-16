// src/pages/ProblemDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProblemDetail() {
  const { problemId } = useParams();
  const [problem, setProblem] = useState(null);
  const [sourceCode, setSourceCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  // 문제 상세 불러오기
  useEffect(() => {
    async function load() {
      setLoading(true);
      setLoadError(null);
      try {
        const res = await fetch(`/api/problems/${problemId}`);
        if (!res.ok) {
          throw new Error("문제 정보를 불러오지 못했습니다.");
        }
        const data = await res.json();
        setProblem(data);
        setSourceCode(data.initialCode ?? "");
      } catch (e) {
        console.error(e);
        setLoadError(e.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [problemId]);

  if (loading) {
    return (
      <div className="page">
        <p>문제 정보를 불러오는 중입니다...</p>
      </div>
    );
  }

  if (loadError || !problem) {
    return (
      <div className="page">
        <p>문제를 찾을 수 없습니다. ({loadError})</p>
      </div>
    );
  }

  // 제출 버튼 클릭 시
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setResult(null);

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problemId: Number(problem.id), // Long으로 매핑되도록 숫자로 전송
          sourceCode,
        }),
      });

      if (!res.ok) {
        throw new Error("제출 요청에 실패했습니다.");
      }

      const data = await res.json();
      setResult(data);
    } catch (e) {
      console.error(e);
      setResult({
        status: "ERROR",
        message: e.message || "제출 중 오류가 발생했습니다.",
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
