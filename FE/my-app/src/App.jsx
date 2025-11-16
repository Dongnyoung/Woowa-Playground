// src/App.jsx
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProblemList from "./pages/ProblemList.jsx";
import ProblemDetail from "./pages/ProblemDetail.jsx";
import Docs from "./pages/Docs.jsx";
import DocsConsole from "./pages/DocsConsole.jsx";
import DocsInputs from "./pages/DocsInputs.jsx";
import DocsNav from "./pages/DocsNav.jsx"; 
import DocsRandoms from "./pages/DocsRandoms.jsx";
import DocsStrings from "./pages/DocsStrings.jsx";
import DocsDateTimes from "./pages/DocsDateTimes.jsx";
import DocsBanners from "./pages/DocsBanners.jsx";
export default function App() {
  const location = useLocation();
  const isDocsPage = location.pathname.startsWith("/docs");

  return (
    <div className="app">
      {/* 상단 네비게이션 바 */}
      <header className="app-header">
        <Link to="/" className="logo">
          woowa-playground
        </Link>
        <nav className="nav-links">
          <Link to="/problems">Problems</Link>
          <Link to="/docs">Docs</Link>
        </nav>
      </header>

      {/* 본문 영역 */}
      <div className="main-layout">
        {/* 왼쪽 Docs Nav: 문서 페이지일 때만 렌더링 */}
        {isDocsPage && (
          <aside className="docs-sidebar">
            <DocsNav />
          </aside>
        )}

        {/* 오른쪽 페이지 내용 */}
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problems" element={<ProblemList />} />
            <Route path="/problems/:problemId" element={<ProblemDetail />} />

            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/console" element={<DocsConsole />} />
            <Route path="/docs/inputs" element={<DocsInputs />} />
            <Route path="/docs/randoms" element={<DocsRandoms />} />
            <Route path="/docs/strings" element={<DocsStrings />} />
            <Route path="/docs/datetimes" element={<DocsDateTimes />} />
            <Route path="/docs/banners" element={<DocsBanners />} />

          </Routes>
        </main>
      </div>
    </div>
  );
}
