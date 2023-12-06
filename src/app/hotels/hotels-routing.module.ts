import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';

const routes: Routes = [{ path: '', component: HotelsComponent },
{path:'search-hotels', component:HotelsListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
