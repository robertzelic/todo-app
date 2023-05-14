const ListButton = ({ children, onClick, done }) => {
  let classList = 'transition hover:opacity-70 active:text-slate-600';

  if (done) {
    classList = classList + ' text-slate-700';
  }

  return (
    <button className={classList} onClick={onClick}>
      {children}
    </button>
  );
};

export default ListButton;
