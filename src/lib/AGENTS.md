<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-08 | Updated: 2026-03-08 -->

# lib

## Purpose
공통 유틸리티 함수 디렉토리. shadcn/ui 초기화 시 자동 생성된 `utils.ts`가 위치한다. 앱 전역에서 재사용되는 순수 함수를 이 디렉토리에 추가한다.

## Key Files

| File | Description |
|------|-------------|
| `utils.ts` | `cn()` — clsx + tailwind-merge 조합의 조건부 클래스명 유틸리티 |

## For AI Agents

### Working In This Directory
- `cn()` 함수는 shadcn/ui 컴포넌트에서 자동 사용됨 — 수정 금지
- 새 유틸 함수 추가 시 이 디렉토리에 파일 생성 후 named export 사용

### Common Patterns
```ts
// 조건부 클래스 조합 (shadcn 컴포넌트 내부 패턴)
cn('base-class', condition && 'conditional-class', props.className)
```

## Dependencies

### External
- `clsx` — 조건부 클래스명 조합
- `tailwind-merge` — 중복 Tailwind 클래스 병합

<!-- MANUAL: -->
