// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <div className="app">
      {/* 상단 네비게이션 바 */}
      <header className="app-header">
        <Link to="/" className="logo">
          woowa-playground
        </Link>
        <nav className="nav-links">
          <Link to="/problems">Problems</Link>
        </nav>
      </header>

      {/* 실제 페이지가 바뀌는 영역 */}
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<ProblemList />} />
          <Route path="/problems/:problemId" element={<ProblemDetail />} />
        </Routes>
      </main>
    </div>
  );
}
