import { CheckCircle2 } from 'lucide-react'
import { FilterType } from '@/types/todo'

interface EmptyStateProps {
  filter: FilterType
}

const messages: Record<FilterType, { title: string; desc: string }> = {
  all: { title: '할 일이 없습니다', desc: '새로운 할 일을 추가해보세요!' },
  active: { title: '진행 중인 할 일이 없습니다', desc: '모든 할 일을 완료했어요!' },
  completed: { title: '완료된 할 일이 없습니다', desc: '할 일을 완료하면 여기에 표시됩니다.' },
}

export function EmptyState({ filter }: EmptyStateProps) {
  const msg = messages[filter]
  return (
    <div className="flex flex-col items-center justify-center py-16 text-white/40">
      <CheckCircle2 className="w-12 h-12 mb-3 opacity-30" />
      <p className="font-medium text-white/50">{msg.title}</p>
      <p className="text-sm mt-1">{msg.desc}</p>
    </div>
  )
}
