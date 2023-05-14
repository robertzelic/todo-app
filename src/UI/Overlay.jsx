const Overlay = ({ onClose }) => (
  <div className="fixed z-10 h-screen w-full bg-black opacity-80" onClick={onClose}></div>
);

export default Overlay;
