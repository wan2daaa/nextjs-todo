'use client'

import { Badge } from '@/components/ui/badge'
import { FilterType } from '@/types/todo'

interface TodoFilterProps {
  filter: FilterType
  onFilterChange: (filter: FilterType) => void
  activeCount: number
  completedCount: number
  totalCount: number
}

const filters: { value: FilterType; label: string }[] = [
  { value: 'all', label: '전체' },
  { value: 'active', label: '진행 중' },
  { value: 'completed', label: '완료' },
]

export function TodoFilter({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  totalCount,
}: TodoFilterProps) {
  const counts: Record<FilterType, number> = {
    all: totalCount,
    active: activeCount,
    completed: completedCount,
  }

  return (
    <div className="flex gap-1 p-1 bg-white/5 rounded-xl border border-white/10">
      {filters.map(f => (
        <button
          key={f.value}
          onClick={() => onFilterChange(f.value)}
          className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            filter === f.value
              ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
              : 'text-white/50 hover:text-white/80 hover:bg-white/5'
          }`}
        >
          {f.label}
          <Badge
            variant="secondary"
            className={`text-xs px-1.5 py-0 h-5 ${
              filter === f.value
                ? 'bg-white/20 text-white border-0'
                : 'bg-white/10 text-white/50 border-0'
            }`}
          >
            {counts[f.value]}
          </Badge>
        </button>
      ))}
    </div>
  )
}
