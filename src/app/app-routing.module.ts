import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'themes', loadChildren: './themes/themes.module#ThemesPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'series-new', loadChildren: './series-new/series-new.module#SeriesNewPageModule' },
  { path: 'series-detail', loadChildren: './series-detail/series-detail.module#SeriesDetailPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
