# 게시판 만들기

### 9월 10일

- 오류

  `Use PascalCase for React components, or lowercase for HTML elements.`

  - Home.js에 PostItem.js를 호출하는 과정에서 오류 발생.

  - [오류 원인]

    - CamelCase 형식으로 파일명 작성.

  - [해결 방법]
    - PascalCase 형식으로 파일명 작성.
    - postItem -> PostItem 으로 변경

  `map 함수 작동 x`

  - [오류 원인]

    - List.map((it)=>{
      _ 리턴 작성 안 함_
      })

  - [해결 방법]
    - List.map((it)=>{
      return (-----------) _리턴 작성 ~~_
      })
