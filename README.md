# portfolio2

![portfolio](https://github.com/Sovidi/portfolio2/assets/133857264/e7ad4fa2-8bba-4396-9134-18834a225248)

## 소개

기존 Vue.js 를 이용하여 만들었던 포트폴리오 사이트의 엔드포인트 문제가 있어 Next.js 를 통한 엔드포인트 내장형으로 이식하였습니다.
댓글 기능을 위한 서버연결이 있어 서버와 엔드포인트가 불가피 하였습니다.

## 개발기간

- 2023.11.13 ~ 2023.11.22

## 개발환경
> Visual Studio Code

##
![](https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=ffffff)
![](https://img.shields.io/badge/html5-E34F26.svg?&style=for-the-badge&logo=html5&logoColor=ffffff)
![](https://img.shields.io/badge/next.js-000000.svg?&style=for-the-badge&logo=nextdotjs&logoColor=ffffff)
![](https://img.shields.io/badge/sass-CC6699.svg?&style=for-the-badge&logo=sass&logoColor=ffffff)
![](https://img.shields.io/badge/express-000000.svg?&style=for-the-badge&logo=express&logoColor=ffffff)
![](https://img.shields.io/badge/mongodb-47A248.svg?&style=for-the-badge&logo=mongodb&logoColor=ffffff)


## 개발이슈
- 댓글기능으로 인하여 서버와 데이터베이스 연결이 되어 있습니다. 하나의 기능만 있어 댓글 삭제 및 수정에 사용자가 작성하였던 eMail 을 고유아이디로 사용합니다.
- 감지기능 자체를 모두 서버단에 넣어 프론트단 코드를 최소화 하였습니다. 만약 추가기능이 있었다면 서버에서 보내지는 데이터는 프론트에서 감지하고 처리하였겠지만 댓글기능 하나만 있으므로 서버에서 감지 및 수정처리를 하게 됩니다.
- 풀페이징 스타일을 위한 플러그인이 사용되었습니다. Vue 에서 일어났던 이슈와 다르게 Next.js 에서 일어난 이슈로는, 플러그인 내부안에서가 아닌 외부 상태관리 훅 데이터를 접근하거나 읽기만 해도 페이지가 새로고침 및 초기화되는 버그가 있었습니다, 이로 인하여 컴포넌트별로 props 값을 보내주는것으로만 상태관리가 가능합니다.
