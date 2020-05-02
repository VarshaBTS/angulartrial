import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './login/menu/menu.component';
import { StupidComponent } from './stupid/stupid.component';

const routes: Routes = [{
   path:'app-login',component:LoginComponent},
  
     {path:'app-menu',component:MenuComponent},
     {path:'app-stupid',component:StupidComponent
   
 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
