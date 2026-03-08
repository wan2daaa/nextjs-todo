'use client'

import { useState, KeyboardEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

interface TodoInputProps {
  onAdd: (text: string) => void
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    if (!value.trim()) return
    onAdd(value)
    setValue('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="flex gap-2">
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="새로운 할 일을 입력하세요..."
        className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-amber-500"
      />
      <Button
        onClick={handleSubmit}
        disabled={!value.trim()}
        className="bg-amber-700 hover:bg-amber-600 text-amber-50 border-0 transition-all duration-200"
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  )
}
