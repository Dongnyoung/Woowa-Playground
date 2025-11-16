// src/pages/DocsInputs.jsx
import DocsNav from "./DocsNav.jsx";

export default function DocsInputs() {
  return (
    <div className="page docs-layout">

      <div className="docs-content">
        <h1>Inputs</h1>
        <p className="subtitle">
          반복되는 입력/검증 로직을 줄이기 위한 유틸입니다.
        </p>

        <section className="docs-section">
          <h2>예시: 양수 정수 입력받기</h2>
          <pre className="code-block">
{`import camp.woowa.Inputs;
import camp.woowa.Console;

public class Example {
    public static void main(String[] args) {
        int count = Inputs.readPositiveInt("횟수를 입력하세요: ");
        Console.println("입력된 횟수 = " + count);
    }
}`}
          </pre>
        </section>

        <section className="docs-section">
          <h2>대표 메서드 (예시)</h2>
          <ul>
            <li><code>Inputs.readInt(String prompt)</code> – 문구 출력과 동시에 정수 입력</li>
            <li><code>Inputs.readPositiveInt(String prompt)</code> – 문구 출력과 동시에 양수만 허용</li>
            <li><code>Inputs.readIntList(String prompt, String delimiter)</code> – 문구출력,구분자로 나눈 정수 리스트</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
