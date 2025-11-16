// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page home">
      <h1>Woowa-playground 우아한테크코스 라이브러리 연습 사이트</h1>
      <p className="subtitle">
        Console, Inputs, Randoms, Strings 등을 연습할 수 있는 미니 온라인 저지입니다.
      </p>

      <section className="home-section">
        <h2>어떻게 쓰나요?</h2>
        <ol>
          <li>문제 목록에서 연습할 문제를 선택합니다.</li>
          <li>제공된 설명과 요구사항을 읽습니다.</li>
          <li>에디터에 Java 코드를 작성하고 제출합니다.</li>
          <li>백엔드 API가 코드를 검사하고 결과를 돌려줍니다.</li>
        </ol>
      </section>

      <button
        className="primary-button"
        onClick={() => navigate("/problems")}
      >
        문제 풀러 가기
      </button>
    </div>
  );
}
