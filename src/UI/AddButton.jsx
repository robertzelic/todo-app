const AddButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="my-2 ml-2 rounded bg-slate-600 px-4 py-2 text-slate-300 transition focus:outline-none focus:ring-slate-300 enabled:hover:bg-slate-500 enabled:focus:ring enabled:active:bg-slate-400 disabled:opacity-50"
    >
      {children}
    </button>
  );
};

export default AddButton;
