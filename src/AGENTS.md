<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-08 | Updated: 2026-03-08 -->

# src

## Purpose
애플리케이션 소스코드 전체를 담는 루트 디렉토리. Next.js App Router 구조를 따르며 app, components, hooks, lib, types 로 역할별 분리되어 있다.

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `app/` | Next.js App Router 페이지 및 레이아웃 (see `app/AGENTS.md`) |
| `components/` | 기능 컴포넌트 및 shadcn/ui 컴포넌트 (see `components/AGENTS.md`) |
| `hooks/` | 커스텀 React 훅 (see `hooks/AGENTS.md`) |
| `lib/` | 유틸리티 함수 (see `lib/AGENTS.md`) |
| `types/` | TypeScript 타입 정의 (see `types/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- 새 기능 추가 시 관련 디렉토리에 파일을 추가하고, `src/` 루트에 파일을 직접 생성하지 않는다
- `@/*` import alias는 이 `src/` 디렉토리를 기준으로 동작한다
- 클라이언트 전용 코드(브라우저 API 사용)는 반드시 `'use client'` 선언 필요

### Common Patterns
- 배럴 export (`index.ts`) 미사용 — 파일을 직접 import
- 컴포넌트 파일명은 PascalCase, 훅/유틸은 camelCase

<!-- MANUAL: -->
