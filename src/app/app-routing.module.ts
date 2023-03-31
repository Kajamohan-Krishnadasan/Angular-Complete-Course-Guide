import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/guards/auth-guard.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { UserResolveService } from './services/resolvers/user-resolve.services';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const allRoutesOfApp: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { page: 55, search: 'Niroshan' },
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
      },
      {
        path: ':id/:name/edit',
        component: EditUserComponent,
        canDeactivate: [DeactivateGuardService],
        resolve: { user: UserResolveService },
      },
    ],
  },
  // {
  //   path: 'users/:id/:name',
  //   component: UserComponent,
  // },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(allRoutesOfApp, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}