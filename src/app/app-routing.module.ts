import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdDemoComponent } from './cd-demo/cd-demo.component';
import { AppComponent } from './app.component';
import { DiDemoComponent } from './di-demo/di-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'cd', pathMatch: 'full' },
  { path: 'cd', component: CdDemoComponent},
  { path: 'di', component: DiDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
