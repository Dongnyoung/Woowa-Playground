import DocsNav from "./DocsNav.jsx";

export default function DocsRandoms() {
  return (
    <div className="page docs-layout">
        
      <div className="docs-content">
        <h1>Randoms</h1>
        <p className="subtitle">
          난수 생성과 리스트 랜덤 선택을 제공하는 유틸입니다.
        </p>

        <section className="docs-section">
          <h2>범위 내 정수 뽑기</h2>
          <pre className="code-block">
{`import io.github.dongnyoung.missionutils.Randoms;
import io.github.dongnyoung.missionutils.Consle;

public class Example {
    public static void main(String[] args) {
        int n = Randoms.pickNumberInRange(1, 9);  // 1~9
        Console.println("랜덤 숫자 = " + n);
    }
}`}
          </pre>
        </section>
      </div>
    </div>
  );
}
