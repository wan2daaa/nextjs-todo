<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-08 | Updated: 2026-03-08 -->

# components

## Purpose
Todo 앱의 모든 UI 컴포넌트를 담는 디렉토리. 기능 컴포넌트(`Todo*`)와 shadcn/ui 기본 컴포넌트(`ui/`)로 구분된다. 모든 컴포넌트는 클라이언트 컴포넌트(`'use client'`)이며 우드톤(amber/stone) 글래스모피즘 디자인을 사용한다.

## Key Files

| File | Description |
|------|-------------|
| `TodoApp.tsx` | 메인 컨테이너 — `useTodos` 훅 연결, 전체 레이아웃 및 배경 그라디언트 |
| `TodoInput.tsx` | 새 Todo 입력 폼 — Input + Plus 버튼, Enter 키 지원 |
| `TodoItem.tsx` | 개별 Todo 항목 — Checkbox(완료 토글), 텍스트, Trash2(삭제 버튼) |
| `TodoList.tsx` | Todo 목록 렌더러 — 빈 상태 시 `EmptyState` 표시 |
| `TodoFilter.tsx` | 필터 탭 — All / 진행 중 / 완료, 각 탭에 카운트 Badge 표시 |
| `EmptyState.tsx` | 빈 상태 UI — 필터별 맞춤 메시지와 아이콘 |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `ui/` | shadcn/ui 자동 생성 기본 컴포넌트 (see `ui/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- 모든 기능 컴포넌트에 `'use client'` 선언 유지
- Props 인터페이스는 컴포넌트 파일 상단에 정의
- 색상 테마: `amber-*`(강조색), `stone-*`(배경), `white/*`(텍스트 투명도)
- shadcn/ui 컴포넌트 추가: `npx shadcn@latest add {component}`

### Common Patterns
```tsx
// 조건부 스타일 패턴
className={`base-class ${condition ? 'active-class' : 'inactive-class'}`}

// 호버 가시성 패턴 (삭제 버튼 등)
className="opacity-0 group-hover:opacity-100"
```

### Testing Requirements
- `npm run build` 성공 확인
- 브라우저에서 Todo CRUD 전체 플로우 수동 검증

## Dependencies

### Internal
- `src/hooks/useTodos.ts` — Todo 상태 관리 (TodoApp에서 사용)
- `src/types/todo.ts` — Todo, FilterType 타입
- `src/lib/utils.ts` — `cn()` 유틸 (shadcn 컴포넌트에서 사용)

### External
- `shadcn/ui` — Button, Input, Checkbox, Badge
- `lucide-react` — ListTodo, Plus, Trash2, CheckCircle2 아이콘

<!-- MANUAL: -->
