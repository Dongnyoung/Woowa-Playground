import { Link } from "react-router-dom";
import DocsNav from "./DocsNav.jsx";

export default function Docs() {
  return (
    <div className="page docs-layout">

      <div className="docs-content">
        <h1>woowa-mission-utils 문서</h1>
        <p className="subtitle">
          콘솔 기반 미션을 편하게 만들기 위해 기존의 라이브러리에 확장하여 만든 유틸리티 라이브러리입니다.
        </p>

        <section className="docs-section">
          <h2>설치</h2>
          <pre className="code-block">
{`repositories {
    maven { url "https://jitpack.io" }
}

dependencies {
    implementation "io.github.dongnyoung:woowa-mission-utils:0.1.0"
}`}
          </pre>
        </section>

        <section className="docs-section">
          <h2>모듈 소개</h2>
          <ul>
            <li>
              <Link to="/docs/console"><b>Console</b></Link> – print, println, readLine
            </li>
            <li>
              <Link to="/docs/inputs"><b>Inputs</b></Link> – 검증 포함 입력 헬퍼
            </li>
            <li>
              <Link to="/docs/randoms"><b>Randoms</b></Link> – 범위/리스트 랜덤
            </li>
            <li>
              <Link to="/docs/datetimes"><b>DateTimes</b></Link> – 시간 유틸
            </li>
            <li>
              <Link to="/docs/strings"><b>Strings</b></Link> – 문자열 유틸
            </li>
            <li>
              <Link to="/docs/banners"><b>Banners</b></Link> – 배너 스타일 출력
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
