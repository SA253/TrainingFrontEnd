import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { Signup1Component } from './signup1/signup1.component';
import { Signup2Component } from './signup2/signup2.component';
import { ServicesComponent} from './services/services.component';




const routes: Routes = [
  {path:'',component: WelcomeComponent},
  {path:'signup1',component: Signup1Component},
  {path:'signup2',component:Signup2Component},
  {path:'services',component:ServicesComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  providers:[],

  exports: [RouterModule]
})
export class AppRoutingModule { }
