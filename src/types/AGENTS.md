<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-08 | Updated: 2026-03-08 -->

# types

## Purpose
TypeScript 타입 정의 디렉토리. 앱 전체에서 공유되는 도메인 타입을 중앙 관리한다. 단일 파일(`todo.ts`)에 Todo 관련 모든 타입이 정의되어 있다.

## Key Files

| File | Description |
|------|-------------|
| `todo.ts` | `Todo` 인터페이스 및 `FilterType` 유니온 타입 |

## For AI Agents

### Working In This Directory
- `Todo` 인터페이스 필드 변경 시 `useTodos.ts`의 `addTodo` 함수도 함께 수정
- `FilterType`에 새 필터 추가 시 `TodoFilter.tsx`의 `filters` 배열과 `useTodos.ts`의 필터 로직도 업데이트 필요
- 타입 변경 후 `npx tsc --noEmit`으로 타입 오류 확인

### Current Types
```ts
// FilterType: Todo 목록 필터 상태
type FilterType = 'all' | 'active' | 'completed'

// Todo: 개별 Todo 항목 데이터 구조
interface Todo {
  id: string        // crypto.randomUUID() 생성
  text: string      // 사용자 입력 텍스트
  completed: boolean
  createdAt: number // Date.now() 타임스탬프
}
```

## Dependencies
- 이 디렉토리는 다른 내부 모듈에 의존하지 않음 (leaf node)

<!-- MANUAL: -->
