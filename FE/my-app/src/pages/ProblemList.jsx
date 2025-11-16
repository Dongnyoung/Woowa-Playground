// src/pages/ProblemList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 나중에 백엔드 연동 전에 임시로 쓰는 목업 데이터
const MOCK_PROBLEMS = [
  {
    id: 1,
    title: "Console로 문자열 입력받기",
    level: "easy",
    shortDescription: "Console.readLine()을 사용해 이름을 입력받고 출력하세요.",
  },
  {
    id: 2,
    title: "Randoms로 숫자 뽑기",
    level: "easy",
    shortDescription: "Randoms.pickNumberInRange()를 사용해 1~9 사이 숫자를 출력하세요.",
  },
  {
    id: 3,
    title: "Inputs로 양수만 입력받기",
    level: "medium",
    shortDescription: "0 이하 숫자는 에러가 나도록 처리해 보세요.",
  },
];

export default function ProblemList() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    // TODO: 나중에는 여기서 백엔드 호출
    // fetch("/api/problems")
    //   .then(res => res.json())
    //   .then(setProblems)
    //   .catch(console.error);

    setProblems(MOCK_PROBLEMS);
  }, []);

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
              <span className={`badge badge-${problem.level}`}>
                {problem.level}
              </span>
            </div>
            <p className="problem-desc">{problem.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
