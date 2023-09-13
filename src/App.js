import "./App.css";
import Home from "./page/Home";
import New from "./page/New";
import Post from "./page/Post";
import React, { useReducer } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    default:
      return state;
  }
};

const List = [
  {
    postId: 1,
    postTitle: "안녕하세요",
    postBody:
      "더미데이터 1입니다. ㅁㄴ아리미ㅓㅏㄴㅇ라ㅓㅁㄴ일만ㅇ라ㅣㅁㄴ;언ㅇ라ㅓㅣㄴㅇ라ㅣㄹㄴ안ㅁㄴㅇㄹㅇㄴㄹㅇㄹㄴㄴㅇㄹㅇㄹㄴㄹㅇㄴㄹㅇㄴㅇㄹㄹㅇㄹ",
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
  {
    postId: 4,
    postTitle: "방가방가",
    postBody: "더미데이터3입니다.",
    postAuthor: "글쓴이3",
    postDate: 1693808051251,
  },
];

export const PostStateContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, List);

  return (
    <PostStateContext.Provider value={data}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/New" element={<New />} />
            <Route path="/Post/:postId" element={<Post />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PostStateContext.Provider>
  );
}

export default App;
