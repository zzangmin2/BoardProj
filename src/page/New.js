import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import PostEditor from "../components/PostEditor";

import { useNavigate } from "react-router-dom";

const New = () => {
  const navigate = useNavigate();

  return (
    <div className="New">
      <MyHeader
        text="새 글 쓰기"
        leftChild={
          <MyButton
            text="이전으로"
            type="header"
            onClick={() => navigate(-1)}
          />
        }
      />
      <PostEditor />
    </div>
  );
};

export default New;
