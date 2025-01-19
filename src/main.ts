import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

// 웹사이트가 로드될 때 브라우저는 index.html을 가져와서 보여줌.
// index.html에는 스크립트 파일을 가져오기 위한 어떤 코드도 없음
// 하지만 브라우저 도구를 열면 polifill.js, main.js 파일이 script 태그로 import 하고있음.
// ng serve를 통해 이 처리가 자동으로 이루어짐
bootstrapApplication(AppComponent).catch((err) => console.error(err));
