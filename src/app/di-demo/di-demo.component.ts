import { Component } from '@angular/core';
import { DiDemoService } from './di-demo.service';

@Component({
  selector: 'app-di-demo',
  templateUrl: './di-demo.component.html',
  styleUrl: './di-demo.component.scss'
})
export class DiDemoComponent {
  serviceMessage: string = '';

  constructor(private diDemoService: DiDemoService){

  }

  ngOnInit(){
    this.serviceMessage = this.diDemoService.getMessage();
  }
}
