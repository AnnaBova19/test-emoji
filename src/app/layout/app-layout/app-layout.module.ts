import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 

import { AppLayoutComponent } from './app-layout.component';

const routes: Routes = [
  { 
    path: '', 
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../../pages/message/message.module').then(m => m.MessageModule)
      },
    ]
  }
];

@NgModule({
  declarations: [
    AppLayoutComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [ RouterModule ],
  providers: [],
})
export class AppLayoutModule { }