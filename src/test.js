



// require -> 외부 모듈을 가져올 때 사용됨
// require 메서드를 이요하여 모듈을 가져와도 해당 모듈의 API에 접근할 권한이 바로 생기지않음
// 밖으로 내보낼 API들은 module.exports의 object에 정의하는 절차를 걸쳐야 함

// http는 node에서 제공하는 모듈

// const http = require("http");
// const app = http.createServer((request,response) => {
//     const _url = request.url;
//     const fullUrl = new URL("http://localhost:3000"+_url);
//     const pathName = fullUrl.pathname;

//     if(pathName === "/"){
//         response.writeHead(200,{ "Content-Type": "text/html;charset= utf-8"});
//         response.end('<h1>ㅎㅇㅎㅇ<h1>');
//         // response.write를 사용해서 write할수있고 마지막요소는 메소드.end를 사용해 종료시켜야함
//     }

// });

// app.listen(3000, () => {
//     console.log("서버시작!!!!");
// });






// express를 사요하려면 nodejs V10이상 설치
//   npm install --save express로 express 설치

const express = require('express');
const app1 = express();
const port = 3001;

//const login = require('./public/login');

//app1.use('/login',login);

app1.use('/',express.static(__dirname + '/../public'));

app1.get("/", (req,res) => {
    res.sendFile("/index.html") //메인페이지
   // res.sendFile('index.html',{root : 'C:\SharePlan\shareplan\public\'});
   // res.sendFile('index.html', { root: "C:\SharePlan\shareplan\public" });
});




app1.get("/main",(req,res) => {
    res.sendFile(__dirname+"/public/main.html");
    // __dirname은 요청하고자 하는 파일의 경로를 단축시켜주는 절대경로 식별자
});

app1.listen(port,() => {
    console.log("3001서버 시작1!!!")
});




/* nodemon 설치했는데  이 시스템에서 스크립트를 실행할 수 없으므로 C:\Users\USER\AppData\Roaming\npm\nodemon.p
s1 파일을 로드할 수 없습니다. 자세한 내용은 about_Execution_Policies(https://go.microsoft.com/fwl 
ink/?LinkID=135170)를 참조하십시오.
라는 문구가 뜨면 window Powershell 관리자 권한으로 접속해 

get-ExecutionPolicy -> Restricted가 나오면

RemoteSigned으로 변경 -> Set-ExecutionPolicy RemoteSigned
*/

/*
-------react 연동하기
npm install create-react-app : react다운로드
npx create-react-app react : react 이름으로 생성
cd react -> npm run build : react에서 빌드


*/ 




