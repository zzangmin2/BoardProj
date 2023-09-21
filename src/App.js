import "./App.css";

import React, { useRef, useReducer } from "react";
import Home from "./page/Home";
import New from "./page/New";
import Post from "./page/Post";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const List = [
  {
    postId: 1,
    postTitle: "안녕하세요",
    postBody:
      "더미데이터 1입니다. ㅁㄴ아리미ㅓㅏㄴㅇ라ㅓㅁㄴ일만ㅇ라ㅣㅁㄴ;언ㅇ라ㅓㅣㄴㅇ라ㅣㄹㄴ안ㅁㄴㅇㄹㅇㄴㄹㅇㄹㄴㄴㅇㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㅇㄹㄹㅇㄹ더미데이터 1입니다. ㅁㄴ아리미ㅓㅏㄴㅇ라ㅓㅁㄴ일만ㅇ라ㅣㅁㄴ;언ㅇ라ㅓㅣㄴㅇ라ㅣㄹㄴ안ㅁㄴㅇㄹㅇㄴㄹㅇㄹㄴㄴㅇㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㅇㄹㄹㅇㄹ더미데이터 1입니다. ㅁㄴ아리미ㅓㅏㄴㅇ라ㅓㅁㄴ일만ㅇ라ㅣㅁㄴ;언ㅇ라ㅓㅣㄴㅇ라ㅣㄹㄴ안ㅁㄴㅇㄹㅇㄴㄹㅇㄹㄴㄴㅇㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㅇㄹㄹㅇㄹ더미데이터 1입니다. ㅁㄴ아리미ㅓㅏㄴㅇ라ㅓㅁㄴ일만ㅇ라ㅣㅁㄴ;언ㅇ라ㅓㅣㄴㅇ라ㅣㄹㄴ안ㅁㄴㅇㄹㅇㄴㄹㅇㄹㄴㄴㅇㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㅇㄹㄹㅇㄹ더미데이터 1입니다. ㅁㄴ아리미ㅓㅏㄴㅇ라ㅓㅁㄴ일만ㅇ라ㅣㅁㄴ;언ㅇ라ㅓㅣㄴㅇ라ㅣㄹㄴ안ㅁㄴㅇㄹㅇㄴㄹㅇㄹㄴㄴㅇㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㅇㄹㄹㅇㄹ더미데이터 1입니다. ㅁㄴ아리미ㅓㅏㄴㅇ라ㅓㅁㄴ일만ㅇ라ㅣㅁㄴ;언ㅇ라ㅓㅣㄴㅇ라ㅣㄹㄴ안ㅁㄴㅇㄹㅇㄴㄹㅇㄹㄴㄴㅇㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㅇㄹㄹㅇㄹ더미데이터 1입니다. ㅁㄴ아리미ㅓㅏㄴㅇ라ㅓㅁㄴ일만ㅇ라ㅣㅁㄴ;언ㅇ라ㅓㅣㄴㅇ라ㅣㄹㄴ안ㅁㄴㅇㄹㅇㄴㄹㅇㄹㄴㄴㅇㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㅇㄹㄹㅇㄹ더미데이터 1입니다. ㅁㄴ아리미ㅓㅏㄴㅇ라ㅓㅁㄴ일만ㅇ라ㅣㅁㄴ;언ㅇ라ㅓㅣㄴㅇ라ㅣㄹㄴ안ㅁㄴㅇㄹㅇㄴㄹㅇㄹㄴㄴㅇㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㅇㄹㄹㅇㄹ",
    postAuthor: "글쓴이1",
    postDate: 1693808051249,
  },
  {
    postId: 2,
    postTitle: "반갑습니다.",
    postBody: "더미데이터2입니다.",
    postAuthor: "글쓴이2",
    postDate: 1693808051250,
  },
  {
    postId: 3,
    postTitle: "방가방가",
    postBody: "더미데이터3입니다.",
    postAuthor: "글쓴이3",
    postDate: 1693808051251,
  },
];

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    default:
      return newState;
  }
  return newState;
};

export const PostStateContext = React.createContext();
export const PostDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, List);

  const postId = useRef(4);

  const onCreate = (postAuthor, postTitle, postBody, postDate) => {
    dispatch({
      type: "CREATE",
      data: {
        postId: postId.current,
        postTitle: postTitle,
        postDate: new Date(postDate).getTime(),
        postBody,
        postAuthor,
      },
    });
    postId.current += 1;
  };

  return (
    <PostStateContext.Provider value={data}>
      <PostDispatchContext.Provider value={{ onCreate }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/New" element={<New />} />
              <Route path="/Post/:postId" element={<Post />} />
            </Routes>
          </div>
        </BrowserRouter>
      </PostDispatchContext.Provider>
    </PostStateContext.Provider>
  );
}

export default App;
