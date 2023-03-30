import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

const allRoutesOfApp: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'users/:id/:name',
    component: UserComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    UserComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(allRoutesOfApp)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
