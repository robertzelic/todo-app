import TodoListItem from './TodoListItem';

const TodoList = ({ list, onDone, onEdit, onDelete }) => {
  return (
    <div className="rounded-md bg-slate-600 px-6 py-3 shadow-2xl">
      {list && list.length > 0 ? (
        <ul>
          {list.map(item => (
            <TodoListItem
              key={item.id}
              item={item}
              onDone={onDone}
              onEdit={onEdit}
              onDelete={onDelete}
            >
              {item.description}
            </TodoListItem>
          ))}
        </ul>
      ) : (
        <p className="py-2 text-center text-slate-200">No items found. Add some!</p>
      )}
    </div>
  );
};

export default TodoList;
