// src/pages/ProblemList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProblemList() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/problems");
        if (!res.ok) {
          throw new Error("문제 목록을 불러오지 못했습니다.");
        }
        const data = await res.json();
        setProblems(data);
      } catch (e) {
        console.error(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className="page">
        <h1>문제 목록</h1>
        <p className="subtitle">문제를 불러오는 중입니다...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <h1>문제 목록</h1>
        <p className="subtitle">에러: {error}</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>문제 목록</h1>
      <p className="subtitle">
        woowa-mission-utils를 활용해 풀어볼 수 있는 예제 문제들입니다.
      </p>

      <div className="problem-list">
        {problems.map((problem) => (
          <Link
            key={problem.id}
            to={`/problems/${problem.id}`}
            className="problem-card"
          >
            <div className="problem-header">
              <h2>{problem.title}</h2>
              {problem.level && (
                <span className={`badge badge-${problem.level}`}>
                  {problem.level}
                </span>
              )}
            </div>
            {problem.shortDescription && (
              <p className="problem-desc">{problem.shortDescription}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
