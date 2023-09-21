import { useContext, useState } from "react";
import MyButton from "./MyButton";
import { PostDispatchContext } from "../App";
import { getStringDate } from "../util/date";

const PostEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(new Date().getTime());

  const { onCreate } = useContext(PostDispatchContext);

  const handleSubmit = () => {
    onCreate("글쓰니", title, content, new Date().getTime());
    alert("성공!");
  };
  return (
    <div className="PostEditor">
      <div className="text_editor">
        <div className="date_created">{getStringDate(new Date())}</div>
        <input
          type="text"
          className="title_input"
          placeholder="제목을 입력하세요"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          className="content_input"
          placeholder="내용을 입력하세요"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <MyButton text="등록하기" type="default" onClick={handleSubmit} />
    </div>
  );
};

export default PostEditor;
