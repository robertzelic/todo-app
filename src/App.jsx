import { useState } from 'react';
import TodoList from './components/TodoList';
import data from './data';
import AddOrEditItem from './components/AddItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [todoList, setTodoList] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  const handleDeleteItem = itemId => {
    setTodoList(prev => prev.filter(listItem => listItem.id !== itemId));
  };

  const handleAddNewItem = item => {
    setTodoList(prev => [...prev, item]);
    setShowModal(false);
  };

  const handleDone = id => {
    const index = todoList.findIndex(item => item.id === id);
    const updatedListItem = { ...todoList[index], done: !todoList[index].done };
    const newTodoList = [...todoList];
    newTodoList[index] = updatedListItem;
    setTodoList(newTodoList);
  };

  const handleGetEdit = (id, description) => {
    setItemToEdit({ id, description });
    setShowModal(true);
  };

  const handleEdit = (id, description) => {
    const index = todoList.findIndex(item => item.id === id);
    const updatedListItem = { ...todoList[index], description };
    const newTodoList = [...todoList];
    newTodoList[index] = updatedListItem;
    setTodoList(newTodoList);
    setShowModal(false);
    setItemToEdit(null);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setItemToEdit(null);
  };

  return (
    <main>
      {showModal && (
        <AddOrEditItem
          onClose={handleModalClose}
          onAdd={handleAddNewItem}
          edit={itemToEdit}
          onEdit={handleEdit}
        />
      )}
      <h1 className="p-16 text-center text-3xl font-bold uppercase tracking-wider">ToDo App</h1>
      <div className="mx-auto max-w-[620px] px-4">
        <TodoList
          list={todoList}
          onDone={handleDone}
          onEdit={handleGetEdit}
          onDelete={handleDeleteItem}
        />
      </div>
      <div className="fixed bottom-0 right-0">
        <button
          className="mb-10 mr-10 h-14 w-14 rounded-full bg-slate-400 text-2xl font-bold active:bg-slate-700 active:text-slate-300"
          onClick={() => setShowModal(true)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </main>
  );
};

export default App;
