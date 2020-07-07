import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

// a typical angular route has two properties
// path: a string that matches url in the browser address bar
// component: component that the router should create when navigating to this route
const routes: Routes = [
  // default route '' to redirect to contacts
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  //parameterized route for contacts, : indicates that :id is a placeholder for a specific contact id
  { path: 'contacts', component: ContactsComponent },
  { path: 'detail/:id', component: ContactDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  // add routerModule to the appRoutingMpdule imports array and configure it with routes
  imports: [RouterModule.forRoot(routes)],
  // export RouterModule so it can be used throughout app
  exports: [RouterModule],
})
export class AppRoutingModule {}
