'use client'

import { useTodos } from '@/hooks/useTodos'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import { TodoFilter } from './TodoFilter'
import { Button } from '@/components/ui/button'
import { ListTodo } from 'lucide-react'

export function TodoApp() {
  const {
    todos,
    allTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    activeCount,
    completedCount,
  } = useTodos()

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-950 via-amber-950 to-stone-950 p-4 sm:p-8">
      <div className="max-w-lg mx-auto">
        {/* 헤더 */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-amber-700/20 rounded-xl border border-amber-600/30">
            <ListTodo className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">My Todos</h1>
            <p className="text-sm text-white/40">
              {activeCount === 0
                ? '모두 완료했어요!'
                : `${activeCount}개 남음`}
            </p>
          </div>
        </div>

        {/* 카드 */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl shadow-black/20 space-y-4">
          {/* 입력 */}
          <TodoInput onAdd={addTodo} />

          {/* 필터 */}
          <TodoFilter
            filter={filter}
            onFilterChange={setFilter}
            activeCount={activeCount}
            completedCount={completedCount}
            totalCount={allTodos.length}
          />

          {/* 목록 */}
          <TodoList
            todos={todos}
            filter={filter}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />

          {/* 하단 액션 */}
          {completedCount > 0 && (
            <div className="flex justify-end pt-2 border-t border-white/10">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCompleted}
                className="text-white/40 hover:text-red-400 hover:bg-red-400/10 text-xs transition-all duration-200"
              >
                완료 항목 모두 삭제 ({completedCount})
              </Button>
            </div>
          )}
        </div>

        {/* 하단 힌트 */}
        <p className="text-center text-white/20 text-xs mt-6">
          데이터는 브라우저 로컬에 저장됩니다
        </p>
      </div>
    </div>
  )
}
