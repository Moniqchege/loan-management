import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
      },
      {
        path: 'customers',
        loadChildren: () => import('./customers/customers.routes').then(m => m.CUSTOMER_ROUTES)
      },
      {
        path: 'loans',
        loadChildren: () => import('./loans/loans.routes').then(m => m.LOAN_ROUTES)
      }
    ]
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
