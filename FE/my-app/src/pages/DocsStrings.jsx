import DocsNav from "./DocsNav.jsx";

export default function DocsStrings() {
  return (
    <div className="page docs-layout">
      <div className="docs-content">
        <h1>Strings</h1>
        <p className="subtitle">
          자주 사용하는 문자열 관련 기능을 모은 유틸입니다.
        </p>

        <section className="docs-section">
          <h2>구분자로 나누어 정수 리스트로 변환</h2>
          <pre className="code-block">
{`import java.util.List;
import io.github.dongnyoung.missionutils.Strings;

public class Example {
    public static void main(String[] args) {
        String input = "1,2,3,10";
        List<Integer> numbers = Strings.splitToInts(input, ",");
        // [1, 2, 3, 10]
    }
}`}
          </pre>
        </section>

        <section className="docs-section">
          <h2>기타 유틸</h2>
          <ul>
            <li><code>Strings.isBlank(String)</code> – 비어있거나 공백인지</li>
            <li><code>Strings.isNumeric(String, int)</code> – 숫자인지</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
