import { getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector:'.app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles: [`
      .online{
        color: white;
      }`]
})
export class ServersComponent implements OnInit {
  allowNewServer =true;
  serverCreationStatus = "No Server was created"
  serverName='Test Server';
  serverCreated= false;
  servers = ['Testserver', 'testserver2' ];
  clicks = 0;
  timeStamp = 0 ;
  constructor() {
    
   }

  ngOnInit(): void {
  }

  getDisplayColor(){
    if(this.clicks > 5){
      return '#FF69B4';
    }
  }

  onDisplayDetails(){
    this.clicks += 1; 
    this.timeStamp = Date.now();
  }
  onCreateServer(){
    this.serverCreated= true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!! name is ' +this.serverName;
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
}

}
