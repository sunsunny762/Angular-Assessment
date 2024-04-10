import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAuthorComponent } from './author/all-author/all-author.component';
import { AuthorDetailComponent } from './author/author-detail/author-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AllAuthorComponent
  },
  {
    path: 'author-detail/:authorId',
    component: AuthorDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
