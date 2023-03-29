import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent as SecondUser } from './Second/user/user.component';
import { UsersComponent as SecondUsers } from './Second/users/users.component';
import { UserComponent as FirstUser } from './First/user/user.component';
import { UsersComponent as FirstUsers } from './First/users/users.component';
import { AddUserComponent as SecondAddUsers } from './Second/add-user/add-user.component';
import { HighlightTextDirective1 } from './Directives/HighlightText1.directive';
import { HighlightTextDirective2 } from './Directives/HighlightText2.directive';
import { RenderHighlightDirective } from './Directives/render-highlight.directive';
import { AlternateIfDirective } from './Directives/AlternateIf.directive';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstUser,
    FirstUsers,
    SecondUser,
    SecondUsers,
    SecondAddUsers,
    HighlightTextDirective1,
    HighlightTextDirective2,
    RenderHighlightDirective,
    AlternateIfDirective,
    UserComponent,
    AddUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
