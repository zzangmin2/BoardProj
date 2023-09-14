const MyHeader = ({ text, leftChild, rightChild }) => {
  return (
    <div className="MyHeader">
      <div className="leftchild">{leftChild}</div>
      <div className="Board_Title">{text}</div>
      <div className="rightchild">{rightChild}</div>
    </div>
  );
};

export default MyHeader;
