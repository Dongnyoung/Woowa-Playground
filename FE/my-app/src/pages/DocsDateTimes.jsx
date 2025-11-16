// src/pages/DocsDateTimes.jsx
import DocsNav from "./DocsNav.jsx";

export default function DocsDateTimes() {
  return (
    <div className="page docs-layout">
      <div className="docs-content">
        <h1>DateTimes</h1>
        <p className="subtitle">
          현재 시간, 포맷팅 등을 간단하게 사용할 수 있는 유틸입니다.
        </p>

        <section className="docs-section">
          <h2>현재 시간 출력</h2>
          <pre className="code-block">
{`import io.github.dongnyoung.missionutils.Console;
import io.github.dongnyoung.missionutils.DateTimes;

public class Example {
    public static void main(String[] args) {
        Console.println("지금 시간 = " + DateTimes.now());
    }
}`}
          </pre>
        </section>

        <section className="docs-section">
          <h2>포맷 지정해서 출력</h2>
          <pre className="code-block">
{`import java.time.format.DateTimeFormatter;
import io.github.dongnyoung.missionutils.Console;
import io.github.dongnyoung.missionutils.DateTimes;

public class Example {
    public static void main(String[] args) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formatted = DateTimes.now().format(formatter);
        Console.println("현재 시각 = " + formatted);
    }
}`}
          </pre>
        </section>
      </div>
    </div>
  );
}
