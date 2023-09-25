/* eslint-disable no-unused-expressions */
import { useContext, useEffect, useState } from "react";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import PostEditor from "../components/PostEditor";

import { useParams, useNavigate } from "react-router-dom";
import { PostStateContext } from "../App";

const Edit = () => {
  const [originData, setOriginData] = useState(null);
  const postList = useContext(PostStateContext);
  const navigate = useNavigate();
  //const [data, setData] = useState(postList);
  const { postId } = useParams();

  //orginData에 잘 들어왔는지 확인
  useEffect(() => {
    if (originData) {
      console.log(originData);
    }
  }, [originData]);

  useEffect(() => {
    if (postList.length >= 1) {
      const targetDiary = postList.find(
        (it) => parseInt(it.postId) === parseInt(postId)
      );

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true }); //없는 일기의 경우 홈을 돌아가게 함
      }
    }
  }, [postId, postList]);

  return (
    <div className="Edit">
      <MyHeader
        text="글 수정하기"
        leftChild={
          <MyButton
            text="이전으로"
            type="header"
            onClick={() => navigate(-1)}
          />
        }
      />
      <PostEditor isEdit={true} originData={originData} />
    </div>
  );
};

export default Edit;
