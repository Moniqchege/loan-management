import { Routes } from '@angular/router';

export const routes: Routes = [
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
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
];
