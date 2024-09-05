import { Component } from '@angular/core';
import { DiDemoService } from '../di-demo.service';

@Component({
  selector: 'app-child-with-same-instance',
  templateUrl: './child-with-same-instance.component.html',
  styleUrl: './child-with-same-instance.component.scss'
})
export class ChildWithSameInstanceComponent {

  serviceMessage: string = '';

  constructor(private diDemoService: DiDemoService){

  }

  ngOnInit(){
    this.serviceMessage = `Child With Same Instance ${this.diDemoService.getMessage()}`;
  }
}
