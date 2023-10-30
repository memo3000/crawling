import express from "express";
import videoRouter from "./routers/videoRouter";



const express = require('express');
const app = express();
const port = 3000;

// 데이터 가져오기와 템플릿 삽입 부분
app.get('/', (req, res) => {
    // 데이터 가져오기와 가공 (코드에서 이미 수행)
    // ulList 배열을 만들고 데이터를 채움
  
    // 템플릿 렌더링
    res.render('index', { data: ulList }); // ulList 데이터를 index.ejs 템플릿에 삽입
  });
  
  app.listen(port, () => {
    console.log(`웹 서버가 http://localhost:${port}에서 실행 중입니다.`);
  });

  export default app;