import { useEffect, useState, useContext } from "react";
import { PostStateContext } from "../App";
import MyHeader from "../components/MyHeader";
import { getStringDate } from "../util/date";

import { useParams } from "react-router-dom";

const Post = () => {
  const PostList = useContext(PostStateContext);
  const { postId } = useParams(); //Post/:postId와 동일한 변수명으로 데이터 꺼낼 수 있음.
  const [data, setData] = useState({});
  useEffect(() => {
    if (PostList.length >= 1) {
      const targetPost = PostList.find(
        (it) => parseInt(it.postId) === parseInt(postId)
      );
      console.log(targetPost);

      setData(targetPost);
    }
  }, [postId, PostList]); // data를 의존성 배열에서 제거

  return (
    <div className="Post">
      <MyHeader text="게시물" />
      <div className="post_wrapper">
        <div className="post_info">
          <div className="post_info_top">
            <p className="post_id">{data.postId}</p>
            <p className="post_title">{data.postTitle}</p>
          </div>
          <div className="post_info_bottom">
            <p className="post_Author">{data.postAuthor}</p>
            {/* <p className="post_date">{getStringDate(data.postDate)}</p> */}
            <p className="post_date">{data.posDate}</p>
          </div>
        </div>
        <div className="post_body">{data.postBody}</div>
        <div className="post_comment">댓글</div>
      </div>
    </div>
  );
};

export default Post;
