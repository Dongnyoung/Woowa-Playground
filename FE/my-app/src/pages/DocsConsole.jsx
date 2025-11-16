// src/pages/DocsConsole.jsx
import DocsNav from "./DocsNav.jsx";

export default function DocsConsole() {
  return (
    <div className="page docs-layout">

      <div className="docs-content">
        <h1>Console</h1>
        <p className="subtitle">
          표준 입력/출력을 간단하게 사용할 수 있는 헬퍼입니다.
        </p>

        <section className="docs-section">
          <h2>기본 사용법</h2>
          <pre className="code-block">
{`import camp.woowa.Console;

public class Example {
    public static void main(String[] args) {
        Console.println("이름을 입력하세요:");
        String name = Console.readLine();
        Console.print("Hello, " + name + "!");
    }
}`}
          </pre>
        </section>

        <section className="docs-section">
          <h2>메서드 목록</h2>
          <ul>
            <li><code>Console.readLine()</code> – 한 줄 입력 받기</li>
            <li><code>Console.print(String)</code> – 개행 없이 출력</li>
            <li><code>Console.println(String)</code> – 개행 포함 출력</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
