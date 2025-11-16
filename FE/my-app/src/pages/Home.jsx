// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page home">
      <section className="home-hero">
        <span className="home-pill">woowa-mission-utils playground</span>
        <h1>
          우아한테크코스 <br />
          <span className="home-highlight">라이브러리 연습 사이트</span>
        </h1>
        <p className="subtitle">
          Console, Inputs, Randoms, Strings, Banners 등
          <br />
          미션에서 자주 쓰이는 유틸을 직접 써 보면서 익혀보세요.
        </p>

        <div className="home-actions">
          <button
            className="primary-button"
            onClick={() => navigate("/problems")}
          >
            문제 풀러 가기
          </button>
          <button
            className="secondary-button"
            onClick={() => navigate("/docs")}
          >
            라이브러리 문서 보기
          </button>
        </div>

        <div className="home-tags">
          <span className="tag">Console</span>
          <span className="tag">Strings</span>
          <span className="tag">Randoms</span>
          <span className="tag">Inputs</span>
          <span className="tag">Banners</span>
          <span className="tag">DateTimes</span>
        </div>
      </section>

      <section className="home-section">
        <h2>어떻게 쓰나요?</h2>
        <ol>
          <li>문제 목록에서 연습할 문제를 선택합니다.</li>
          <li>문제 설명과 요구사항을 읽고 라이브러리 사용법을 떠올립니다.</li>
          <li>에디터에 Java 코드를 작성하고 제출합니다.</li>
          <li>백엔드 API가 코드를 검사하고 결과를 알려줍니다.</li>
        </ol>
      </section>
    </div>
  );
}
