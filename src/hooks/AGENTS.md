<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-08 | Updated: 2026-03-08 -->

# hooks

## Purpose
커스텀 React 훅 디렉토리. Todo 앱의 모든 상태 관리와 localStorage 영속성 로직을 캡슐화한다. UI 레이어와 데이터 로직을 분리하여 테스트 가능성과 재사용성을 높인다.

## Key Files

| File | Description |
|------|-------------|
| `useTodos.ts` | Todo CRUD + 필터링 + localStorage 동기화 — 앱의 핵심 상태 훅 |

## For AI Agents

### Working In This Directory
- 훅 파일은 `'use client'` 불필요 — 클라이언트 컴포넌트에서만 호출됨
- localStorage 접근은 반드시 `try/catch`로 감싸 접근 실패를 무시
- `initialized` ref 패턴 유지 필수 — 초기 빈 배열이 localStorage를 덮어쓰는 것 방지

### Critical Pattern: localStorage 초기화 순서
```ts
// 1. useEffect에서 localStorage 읽기 (마운트 시 1회)
// 2. initialized.current = true 설정
// 3. 이후 todos 변경 시 localStorage 저장 (initialized 체크 필수)
```
이 순서를 변경하면 저장된 데이터가 초기화될 수 있다.

### Testing Requirements
- 새로고침 후 데이터 유지 확인 (localStorage DevTools)
- 여러 탭에서 동시 접속 시 동기화 미지원 (by design)

## Dependencies

### Internal
- `src/types/todo.ts` — `Todo`, `FilterType` 타입

### External
- `react` — `useState`, `useEffect`, `useRef`

<!-- MANUAL: -->
