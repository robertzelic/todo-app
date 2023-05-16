import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from './AddButton';

const Modal = ({ onClose, addNew, edit, onEdit }) => {
  const [inputValue, setInputValue] = useState('');
  const [inputIsValid, setInputIsValid] = useState(false);

  useEffect(() => {
    edit && setInputValue(edit.description);
  }, [edit]);

  useEffect(() => setInputIsValid(inputValue.trim().length > 0), [inputValue]);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!edit) {
      const id = uuidv4();
      addNew({ id, description: inputValue });
    } else {
      onEdit(edit.id, inputValue);
    }
  };

  return (
    <div className="fixed z-20 flex h-screen w-full items-center justify-center">
      <div className="mx-6 w-full max-w-[550px] rounded-lg bg-slate-300 px-6 py-2">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="item" className="my-2">
              {edit ? 'Edit' : 'Add new'}
            </label>
            <input
              autoFocus
              id="item"
              type="text"
              className="my-3 rounded p-1.5 outline-none"
              onChange={handleInputChange}
              value={inputValue}
            />
            <div className="my-1 text-right">
              <Button type="button" onClick={onClose}>
                Close
              </Button>
              <Button type="submit" disabled={!inputIsValid}>
                {edit ? 'Change' : 'Add'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
