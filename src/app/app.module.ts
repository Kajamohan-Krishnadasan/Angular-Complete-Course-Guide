import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Components/user/user.component';
import { UsersComponent } from './Components/users/users.component';
import { UserComponent as FirstUser } from './First/user/user.component';
import { UsersComponent as FirstUsers } from './First/users/users.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { HighlightTextDirective1 } from './Directives/HighlightText1.directive';
import { HighlightTextDirective2 } from './Directives/HighlightText2.directive';
import { RenderHighlightDirective } from './Directives/render-highlight.directive';
import { AlternateIfDirective } from './Directives/AlternateIf.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstUser,
    FirstUsers,
    UserComponent,
    UsersComponent,
    AddUserComponent,
    HighlightTextDirective1,
    HighlightTextDirective2,
    RenderHighlightDirective,
    AlternateIfDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
