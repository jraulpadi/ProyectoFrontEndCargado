import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProductoDetalleComponent }  from './producto-detalle/producto-detalle.component';
import { LocalsComponent }  from './locals/locals.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalle/:id', component: ProductoDetalleComponent },
  { path: 'productos', component: PrincipalComponent },
  { path: 'locals', component: LocalsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
