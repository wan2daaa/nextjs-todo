'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { Todo } from '@/types/todo'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200">
      <Checkbox
        id={todo.id}
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        className="border-white/40 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
      />
      <label
        htmlFor={todo.id}
        className={`flex-1 text-sm cursor-pointer transition-all duration-200 ${
          todo.completed
            ? 'line-through text-white/30'
            : 'text-white/90'
        }`}
      >
        {todo.text}
      </label>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 h-7 w-7 text-white/40 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </Button>
    </div>
  )
}
