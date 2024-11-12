import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './features/bookModule/components/author/author.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'authors', pathMatch: 'full', component: AuthorComponent  },
  {
    path: 'books',
    loadChildren: () =>
      import('./features/bookModule/books.module').then((m) => m.BooksModule),
  },
  { path: '**', redirectTo: '/books' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
