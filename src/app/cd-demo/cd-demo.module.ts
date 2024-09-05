import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdDemoComponent } from './cd-demo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    CdDemoComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CdDemoComponent]
})
export class CdDemoModule { }
