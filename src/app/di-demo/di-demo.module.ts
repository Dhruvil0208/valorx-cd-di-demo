import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiDemoComponent } from './di-demo.component';
import { DiDemoService } from './di-demo.service';
import { ChildWithSameInstanceComponent } from './child-with-same-instance/child-with-same-instance.component';
import { ChildWithDifferentInstanceComponent } from './child-with-different-instance/child-with-different-instance.component';



@NgModule({
  declarations: [
    DiDemoComponent,
    ChildWithSameInstanceComponent,
    ChildWithDifferentInstanceComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DiDemoComponent],
  providers: [DiDemoService]
})
export class DiDemoModule { }
