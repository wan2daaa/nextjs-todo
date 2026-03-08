<!-- Generated: 2026-03-08 | Updated: 2026-03-08 -->

# nextjs-todo

## Purpose
Next.js 16 (App Router) 기반의 클라이언트 전용 Todo 웹 애플리케이션. 백엔드 없이 `localStorage`만으로 데이터를 영속 저장하며, Vercel 배포를 목표로 한다. Tailwind CSS v4 + shadcn/ui로 우드톤(amber/stone) 글래스모피즘 디자인을 구현한다.

## Key Files

| File | Description |
|------|-------------|
| `package.json` | 의존성 및 npm 스크립트 (dev / build / start / lint) |
| `tsconfig.json` | TypeScript 설정 — strict 모드, `@/*` path alias |
| `next.config.ts` | Next.js 설정 (Turbopack 기본 활성) |
| `components.json` | shadcn/ui 설정 — base-nova 스타일, Tailwind v4 |
| `eslint.config.mjs` | ESLint 9+ flat config (eslint-config-next 포함) |
| `postcss.config.mjs` | PostCSS 설정 (@tailwindcss/postcss) |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `src/` | 애플리케이션 소스코드 전체 (see `src/AGENTS.md`) |
| `public/` | 정적 에셋 — SVG 아이콘 파일들 (see `public/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- `npm run dev` — 개발 서버 (localhost:3000)
- `npm run build` — 프로덕션 빌드 검증 (Turbopack)
- `npm run lint` — ESLint 검사
- `npx tsc --noEmit` — TypeScript 타입 검사
- 변경 후 반드시 `npm run build` + `npm run lint` + `npx tsc --noEmit` 모두 통과할 것

### Testing Requirements
- 자동화 테스트 미포함 (POC 수준)
- 수동 검증: 브라우저에서 CRUD, 필터, localStorage 새로고침 후 데이터 유지 확인

### Common Patterns
- 모든 인터랙티브 컴포넌트에 `'use client'` 선언
- `@/*` alias → `src/` 루트 참조
- shadcn/ui 컴포넌트는 `src/components/ui/`에 위치

## Dependencies

### External
- `next@16.1.6` — React 19 기반 풀스택 프레임워크 (App Router)
- `react@19.2.3` / `react-dom@19.2.3` — UI 라이브러리
- `tailwindcss@^4` — 유틸리티 퍼스트 CSS
- `shadcn@^4.0.1` — UI 컴포넌트 라이브러리
- `lucide-react@^0.577.0` — 아이콘
- `clsx` + `tailwind-merge` — 조건부 클래스 유틸리티

<!-- MANUAL: -->
