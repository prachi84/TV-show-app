import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ShowdetailNewpageComponent} from '../app/showdetail-newpage/showdetail-newpage.component'; //fang

const routes: Routes = [
  {path:'showdetail-newpage',component:ShowdetailNewpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
