import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import Overlay from '../UI/Overlay';
import Modal from '../UI/Modal';

const portal = document.getElementById('overlay');

const AddOrEditItem = ({ onClose, onAdd, edit, onEdit }) => {
  return (
    <Fragment>
      {createPortal(<Overlay onClose={onClose} />, portal)}
      {createPortal(<Modal onClose={onClose} addNew={onAdd} edit={edit} onEdit={onEdit} />, portal)}
    </Fragment>
  );
};

export default AddOrEditItem;
