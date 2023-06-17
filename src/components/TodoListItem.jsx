import { faCheck, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListButton from '../UI/ListButton';

const TodoListItem = ({ children, onDone, onEdit, onDelete, item }) => {
  return (
    <li className="my-3 flex gap-3 rounded-md bg-slate-500 p-3 text-slate-200 shadow-inner">
      {item.done ? (
        <del className="mr-auto">{children}</del>
      ) : (
        <p className="mr-auto">{children}</p>
      )}
      <ListButton onClick={() => onDone(item.id)} done={item.done} label="done">
        <FontAwesomeIcon icon={faCheck} />
      </ListButton>
      <ListButton onClick={() => onEdit(item.id, item.description)} label="edit">
        <FontAwesomeIcon icon={faPenToSquare} />
      </ListButton>
      <ListButton onClick={() => onDelete(item.id)} label="delete">
        <FontAwesomeIcon icon={faTrashCan} />
      </ListButton>
    </li>
  );
};

export default TodoListItem;
