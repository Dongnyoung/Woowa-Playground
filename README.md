# Woowa-Playground 
**우아한테크코스 미션 유틸 라이브러리를 바로 연습해볼 수 있는 Playground**



## 📘 소개

**Woowa-Playground**는  
우아한테크코스 미션 유틸라이브러리를 확장하여 개발한 Java 유틸리티 라이브러리  
➡️ **[woowa-mission-utils](https://github.com/Dongnyoung/woowa-mission-utils)**  
를 실제로 사용해보고 연습할 수 있도록 만든 **온라인 미니 저지(Online Judge)** 프로젝트입니다.

우아한테크코스(우테코) 미션에서 자주 사용되는  
`Console`, `Randoms` 뿐만 아니라 제가 추가로 개발한  
`Inputs`, `Strings`, `Banners` 등을 활용해  
문제를 해결하고 제출해볼 수 있는 사이트입니다.

---

## 목표

이 프로젝트의 목적은 다음과 같습니다:

- 만든 **woowa-mission-utils** 라이브러리를  
  실제로 적용해보고 테스트하는 Playground 제공
- 콘솔 기반 자바 미션을 브라우저에서 편하게 연습할 수 있도록 제공
- 일반적인 문제 풀이 사이트처럼 **문제 → 코드 작성 → 제출 → 판정** 흐름 구현
- 백엔드(Spring Boot) + 프론트(Vue/React) 구조의 실제 서비스 형태 경험

---

## 주요 기능

### 문제 목록
라이브러리를 연습할 수 있는 실전 스타일 문제들이 제공됩니다.

### 문제 상세
- 문제 설명  
- 요구사항  
- 초기 템플릿 코드 제공

### 코드 에디터
브라우저에서 Java 코드를 작성할 수 있습니다.

### 제출 및 판정
Spring Boot 백엔드가 제출한 코드를 검사해 PASS/FAIL을 응답합니다.  
*(현재는 문자열/규칙 검사 기반이며, 추후 실제 Java 실행 환경 추가 가능)*

### 문서(Documentation)
`Console / Inputs / Strings / Randoms / Banners / DateTimes`  
각 유틸리티 API 문서를 사이트 내에서 확인할 수 있습니다.

---

## 기술 스택

### Frontend
- **React + Vite**
- React Router
- Vite 개발 서버의 proxy 설정을 통해 백엔드 API로 요청 전달

### Backend
- **Spring Boot 3**
- REST API
- JSON 기반 문제 관리

### Library
- **woowa-mission-utils (기존 미션유틸 라이브러리에서 추가,확장하여 직접 개발)**  
  → 입력, 검증, 문자열 처리, 배너 출력, 랜덤 유틸 등 포함

---
## 시스템 아키텍처
<img width="1114" height="475" alt="스크린샷 2025-11-21 오후 9 27 27" src="https://github.com/user-attachments/assets/0b220b90-56ad-4ede-9d24-d87a9d7860c8" />

---

## 설치 및 실행 방법

### 설치
```bash
git clone https://github.com/Dongnyoung/Woowa-Playground.git
```

### 1) 프론트엔드 실행

```bash
cd FE/my-app
npm install
npm start
```

브라우저에서
```bash
http://localhost:5173
```

### 2) 백엔드 실행

```bash
cd playground
./gradlew bootRun
```

