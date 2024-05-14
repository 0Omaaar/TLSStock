// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { GetCategoriesComponent } from './categories/get-categories/get-categories.component';
import { ArticleComponent } from './articles/articles/article.component';
import { AddArticleComponent } from './articles/add-article/add-article.component';
import { UpdateArticleComponent } from './articles/update-article/update-article.component';
import { TestMaterialComponent } from './test-material/test-material.component';
import { CategoryArticlesComponent } from './categories/category-articles/category-articles.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/analytics',
        pathMatch: 'full'
      },
      {
        path: 'categories',
        component: GetCategoriesComponent
      },
      {
        path: 'articles',
        component: ArticleComponent
      },
      {
        path: 'ajouterArticle',
        component: AddArticleComponent
      },
      {
        path: 'test',
        component: TestMaterialComponent
      },
      {
        path: 'modifierArticle/:id',
        component: UpdateArticleComponent
      },
      {
        path: 'categorie/:id/articles',
        component: CategoryArticlesComponent
      },
      {
        path: 'analytics',
        loadComponent: () => import('./demo/dashboard/dash-analytics.component')
      },
      {
        path: 'component',
        loadChildren: () => import('./demo/ui-element/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'chart',
        loadComponent: () => import('./demo/chart & map/core-apex.component')
      },
      {
        path: 'forms',
        loadComponent: () => import('./demo/forms & tables/form-elements/form-elements.component')
      },
      {
        path: 'tables',
        loadComponent: () => import('./demo/forms & tables/tbl-bootstrap/tbl-bootstrap.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth/signup',
        loadComponent: () => import('./demo/authentication/sign-up/sign-up.component')
      },
      {
        path: 'auth/signin',
        loadComponent: () => import('./demo/authentication/sign-in/sign-in.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
