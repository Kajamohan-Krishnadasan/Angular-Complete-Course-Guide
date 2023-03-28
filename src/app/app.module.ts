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

@NgModule({
  declarations: [
    AppComponent,
    FirstUser,
    FirstUsers,
    UserComponent,
    UsersComponent,
    AddUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
