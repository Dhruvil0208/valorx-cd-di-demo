import { Component } from '@angular/core';
import { DiDemoService } from '../di-demo.service';

@Component({
  selector: 'app-child-with-different-instance',
  templateUrl: './child-with-different-instance.component.html',
  styleUrl: './child-with-different-instance.component.scss',
  providers: [DiDemoService]
})
export class ChildWithDifferentInstanceComponent {
  serviceMessage: string = '';

  constructor(private diDemoService: DiDemoService){
    this.diDemoService.setMessage('This is the service instance of Child Component')
  }

  ngOnInit(){
    this.serviceMessage = `${this.diDemoService.getMessage()}`;
  }
}
