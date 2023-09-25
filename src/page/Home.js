import { useState, useContext, useEffect } from "react";
import { PostStateContext } from "../App";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import { getStringDate } from "../util/date";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const postList = useContext(PostStateContext);
  console.log(postList);

  useEffect(() => {
    setData(postList);
  }, [postList]);

  const navigate = useNavigate();

  return (
    <div className="Home">
      <MyHeader text="게시판" />
      <div className="posts_container">
        <ul className="post_list">
          {data &&
            data.map((it) => {
              console.log(it);
              return (
                <li
                  key={it.postId}
                  className="post_container"
                  onClick={() => navigate(`./Post/${it.postId}`)}
                >
                  <div className="post_info_top">
                    <div className="post_id">{it.postId}</div>
                    <div className="post_title">{it.postTitle} </div>
                  </div>
                  <p className="post_body">{it.postBody.substr(0, 50)}</p>
                  <div className="post_info_bottom">
                    <p className="post_auhor">{it.postAuthor}</p>
                    <p className="post_date">
                      {getStringDate(new Date(it.postDate))}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      <MyButton
        text="글쓰기"
        type="default"
        onClick={() => navigate("./New")}
      />
    </div>
  );
};

export default Home;
