import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";

// Angular의 Component 데코레이터는 클래스의 메타데이터를 제공한다.
// 컴포넌트 데코레이터는 클래스를 Angular 컴포넌트로 변환하여 처리되도록 한다.
// index.html 보면 app-root 태그가 있음.
// 셀릭터를 정의함으로써 Angular가 html에서 어떤 요소를 찾아야 하는지 알려주고 해당 컴포넌트와 템플릿으로 대체한다.
// styleUrl 속성에 정의한 css 파일은 기본적으로 해당 컴포넌트에만 적용되며, 여러 적용범위 옵션도 존재한다.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent
  ],
  templateUrl: './app.component.html', // 상대경로 요구
  styleUrl: './app.component.css', // 상대경로 요구, 예전 Angular 버전에서는 styleUrls를 사용했고, 배열을 값으로 지정했음
})
export class AppComponent {}
