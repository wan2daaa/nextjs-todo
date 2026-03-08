<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-03-08 | Updated: 2026-03-08 -->

# ui

## Purpose
shadcn/ui CLI로 자동 생성된 기본 UI 컴포넌트 디렉토리. 접근성(a11y)이 내장된 headless 컴포넌트를 Tailwind CSS로 스타일링한 결과물이다. **직접 수정하지 않고** 상위 기능 컴포넌트에서 props로 커스터마이징한다.

## Key Files

| File | Description |
|------|-------------|
| `button.tsx` | 버튼 — variant(default/ghost/outline/…), size(sm/md/icon) 지원 |
| `input.tsx` | 텍스트 입력 필드 — `className` prop으로 스타일 오버라이드 |
| `checkbox.tsx` | 체크박스 — `data-[state=checked]` CSS 변수로 완료 색상 제어 |
| `badge.tsx` | 뱃지/태그 — variant(default/secondary/…) 지원, 카운터 표시용 |

## For AI Agents

### Working In This Directory
- **이 파일들은 직접 수정하지 않는다** — shadcn CLI로 재생성 시 덮어씌워짐
- 스타일 변경은 사용하는 컴포넌트에서 `className` prop으로 오버라이드
- 새 shadcn 컴포넌트 추가: `npx shadcn@latest add {component-name}`
- 기존 컴포넌트 업데이트: `npx shadcn@latest add {component-name} --overwrite`

### Common Patterns
```tsx
// className 오버라이드로 테마 색상 적용
<Checkbox className="border-white/40 data-[state=checked]:bg-amber-600" />
<Button className="bg-amber-700 hover:bg-amber-600 text-amber-50" />
<Input className="bg-white/10 border-white/20 focus-visible:ring-amber-500" />
```

## Dependencies

### Internal
- `src/lib/utils.ts` — `cn()` 유틸 (내부 클래스 병합에 사용)

### External
- `@base-ui/react` — 접근성 headless 컴포넌트 기반
- `class-variance-authority` — variant 시스템 (`cva`)
- `tailwind-merge` / `clsx` — 클래스 병합

<!-- MANUAL: -->
