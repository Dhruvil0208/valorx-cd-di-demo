import { Injectable } from '@angular/core';

@Injectable()
export class DiDemoService {

  constructor() {}
    private message: string = 'DI Demo service';

  getMessage(): string {
    return this.message;
  }

  setMessage(newMessage: string) {
    this.message = newMessage;
  }

}
