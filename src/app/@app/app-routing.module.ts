import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'links',
    loadChildren: () =>
      import('./pages/links/links.module').then(m => m.LinksModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./pages/pricing/pricing.module').then(m => m.PricingModule),
  },
  {
    path: 'dictionary',
    loadChildren: () =>
      import('./pages/dictionary/dictionary.module').then(m => m.DictionaryModule),
  },
  {
    path: 'learn',
    loadChildren: () =>
      import('../@learn/learn.module').then(m => m.LearnModule),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./pages/sign-in/sign-in.module').then(m => m.SignInModule),
    canActivate: [NotAuthGuard],
    canActivateChild: [NotAuthGuard],
  },
  {
    path: 'datasets',
    loadChildren: () =>
      import('./pages/datasets/datasets.module').then(m => m.DatasetsModule),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
  },
  {
    path: 'api',
    loadChildren: () =>
      import('./pages/api/api.module').then(m => m.ApiModule),
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('./pages/terms/terms.module').then(m => m.TermsModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
