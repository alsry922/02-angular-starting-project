import { Component, Input, Output, EventEmitter } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
// 컴포넌트에서 정의하는 모든 속성은 컴포넌트의 템플릿에서 사용 가능하다. (public property(기본값) 가능)
//   Angular는 데이터가 변경되는지를 자동으로 감지하고
//   컴포넌트의 템플릿을 살펴보며 변경된 데이터로 인해 템플릿이 다른 DOM 스냅샷을 생성하는지 확인한다.
//   그리고 그러한 경우에는 UI를 업데이트한다.(zone.js 의 도움을 받아 수행한다)
//   zone.js는 이벤트가 발생하면, 변경 사항이 생기는지 Angular 애플리케이션을 확인한다.
// Signal
//   시그널은 값을 보관하는 일종의 컨테이너라고 할 수 있다.(초기 값을 가질 수 있음)
//   Angular는 시그널에 대한 구독을 관리하고 있고, 시그널 값을 변경하면 Angular는 그 변경 사항을 통지받을 수 있다.
//   Angular는 템플릿에서 해당 값이 사용되는 모든 위치를 식별할 수 있고
//   변경 사항이 발생하면 해당 값들이 사용되는 UI 부분에 업데이트가 필요하면 업데이트 한다.
//   이를 통해 angular가 zone 개념을 제거하고 효율적으로 변경감지와 UI 업데이트를 수행할 수 있게 됐다.
//   coumputed
//     Angular가 computed 함수에 전달한 함수 내부에서 signal 값을 읽고 있는지 분석한다.
//     해당 시그널 값이 변경될 때 computed도 signal 값도 변경된다.
//     즉, 이 시그널은 의존하는 시그널들이 변경될 때마다 자동으로 변경된다.
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
