// src/pages/DocsBanners.jsx
import DocsNav from "./DocsNav.jsx";

export default function DocsBanners() {
  return (
    <div className="page docs-layout">
      <div className="docs-content">
        <h1>Banners</h1>
        <p className="subtitle">
          콘솔 프로그램의 시작/끝, 안내 메시지를 꾸며주는 배너 유틸입니다.
        </p>

        <section className="docs-section">
          <h2>기본 배너 출력</h2>
          <pre className="code-block">
{`import camp.woowa.Banners;

public class Example {
    public static void main(String[] args) {
        Banners.opening("레이싱 게임을 시작합니다.").print();
        //...
        Banners.result("레에싱 결과: ").print();
        Banners.closing("게임을 종료합니다.").print();
    }
}`}
          </pre>
        </section>

        <section className="docs-section">
          <h2>info 배너</h2>
          <pre className="code-block">
{`import camp.woowa.Banners;

public class Example {
    public static void main(String[] args) {
        Banners.info("메뉴를 선택하세요.").print();
    }
}`}
          </pre>
        </section>
      </div>
    </div>
  );
}
