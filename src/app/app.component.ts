import { Component, Inject } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WelcomeApp';

  constructor(@Inject(MessageService) private msgService : MessageService){
  }

  welcomeMsg : string =  "";

  public getWelcomeMsg(){
    let resp = this.msgService.GetWelcomeMsg();
    console.log(resp);
    resp.subscribe((data) => this.welcomeMsg = data);
  }

}
