import { Routes } from '@angular/router';
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';

export const LOAN_ROUTES: Routes = [
  {
    path: '',
    component: LoanListComponent
  },
  {
    path: ':id',  
    component: LoanDetailComponent
  }
];
