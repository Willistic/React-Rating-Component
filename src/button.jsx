function Button({ number, setItems }) {
  function ratingNumbers() {
    setItems(number);
  }
  return (
    <button
      onClick={ratingNumbers}
      className="btn-number bg-gray-700 h-10 w-10 rounded-full text-gray-200 pt-1 focus:bg-gray-400 transition-all duration-150"
    >
      {number}
    </button>
  );
}
export default Button;
