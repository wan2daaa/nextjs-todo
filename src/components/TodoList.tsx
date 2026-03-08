import { TodoItem } from './TodoItem'
import { EmptyState } from './EmptyState'
import { Todo, FilterType } from '@/types/todo'

interface TodoListProps {
  todos: Todo[]
  filter: FilterType
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoList({ todos, filter, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return <EmptyState filter={filter} />
  }

  return (
    <div className="flex flex-col gap-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
