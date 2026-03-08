<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-08 | Updated: 2026-03-08 -->

# app

## Purpose
Next.js App Router의 라우팅 진입점. 서버 컴포넌트로 동작하며 `<TodoApp />` 클라이언트 컴포넌트를 렌더링하는 얇은 래퍼 역할만 한다. 전역 스타일과 메타데이터가 이 디렉토리에서 관리된다.

## Key Files

| File | Description |
|------|-------------|
| `layout.tsx` | 루트 레이아웃 — 폰트(Geist), 메타데이터 설정, `globals.css` import |
| `page.tsx` | `/` 경로 진입점 — `<TodoApp />` 렌더링 (서버 컴포넌트) |
| `globals.css` | 전역 CSS — Tailwind v4 import, shadcn CSS 변수, 다크모드 |
| `favicon.ico` | 브라우저 탭 아이콘 |

## For AI Agents

### Working In This Directory
- `page.tsx`는 서버 컴포넌트 — `'use client'` 추가 금지
- `layout.tsx`에서 메타데이터(`title`, `description`) 수정
- `globals.css`의 CSS 변수 수정 시 shadcn/ui 컴포넌트 전체에 영향
- 새 페이지 추가 시 `src/app/{route}/page.tsx` 패턴 사용

### Common Patterns
- `page.tsx`는 `<TodoApp />`만 렌더링하는 단순 래퍼 유지
- shadcn/ui CSS 변수는 `globals.css`의 `:root` 블록에서 관리

## Dependencies

### Internal
- `src/components/TodoApp.tsx` — 실제 UI 로직의 클라이언트 컴포넌트

<!-- MANUAL: -->
