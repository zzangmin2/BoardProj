const MyButton = ({ text, type, onClick }) => {
  return (
    <div>
      <button
        className={["MyButton", `MyButton_${type}`].join(" ")}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default MyButton;
