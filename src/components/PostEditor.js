import { useContext, useState, useEffect } from "react";
import MyButton from "./MyButton";
import { PostDispatchContext } from "../App";
import { getStringDate } from "../util/date";

import { useNavigate } from "react-router-dom";

const PostEditor = ({ isEdit, originData }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(new Date().getTime());

  const { onCreate, onEdit } = useContext(PostDispatchContext);

  const handleSubmit = () => {
    if (!isEdit) {
      onCreate("글쓰니", title, content, date);
      alert("성공!");
      navigate(-1);
    } else {
      onEdit(originData.postId, "글쓰니", title, content, date);
      //navigate(`/Post/${originData.postId}`);
      navigate("/");
    }
  };

  useEffect(() => {
    if (isEdit && originData) {
      setDate(getStringDate(new Date()));
      setTitle(originData.postTitle);
      setContent(originData.postBody);
    }
  }, [isEdit, originData]);

  return (
    <div className="PostEditor">
      <div className="text_editor">
        <div className="date_created">{getStringDate(new Date())}</div>
        <input
          type="text"
          className="title_input"
          placeholder="제목을 입력하세요"
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          className="content_input"
          placeholder="내용을 입력하세요"
          value={content || ""}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <MyButton text="등록하기" type="default" onClick={handleSubmit} />
    </div>
  );
};

export default PostEditor;
