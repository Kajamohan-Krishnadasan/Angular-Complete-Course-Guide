import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent as OldAppComponent } from './app-old.component';
import { UserComponent as SecondUser } from './Second/user/user.component';
import { UsersComponent as SecondUsers } from './Second/users/users.component';
import { UserComponent as FirstUser } from './First/user/user.component';
import { UsersComponent as FirstUsers } from './First/users/users.component';
import { AddUserComponent as SecondAddUsers } from './Second/add-user/add-user.component';
import { HighlightTextDirective1 } from './Directives/HighlightText1.directive';
import { HighlightTextDirective2 } from './Directives/HighlightText2.directive';
import { RenderHighlightDirective } from './Directives/render-highlight.directive';
import { AlternateIfDirective } from './Directives/AlternateIf.directive';
import { UserComponent as ThirdUser } from './Third/user/user.component';
import { AddUserComponent as ThirdAddUser } from './Third/add-user/add-user.component';

@NgModule({
  declarations: [
    OldAppComponent,
    FirstUser,
    FirstUsers,
    SecondUser,
    SecondUsers,
    SecondAddUsers,
    HighlightTextDirective1,
    HighlightTextDirective2,
    RenderHighlightDirective,
    AlternateIfDirective,
    ThirdUser,
    ThirdAddUser,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [OldAppComponent],
})
export class AppModule {}
