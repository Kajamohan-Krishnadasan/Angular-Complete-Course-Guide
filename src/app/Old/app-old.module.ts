import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
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
import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { CategoriesComponent } from '../categories/categories.component';

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
    ThirdUser,
    ThirdAddUser,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}