import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  messages: any;
  loadedMessage: any;
  user:any;
  messagesCount: number;
  page:number = 0;  
  inboxtype:boolean = true;
  reset: number = 0;

  constructor(private messagesService: MessagesService
            , private userServices: UserService) {
    this.inbox();
    this.user = userServices.user;
  }

  ngOnInit(): void {
  }

  loadMessage (message: any) {
    this.loadedMessage = message;
  }

  inbox(){
    this.reset = 0;
    this.inboxtype = true;
    this.loadedMessage = null;
    this.messagesService.getMessages()
      .subscribe((resp: any )  => {
        this.messages = resp.messages.rows;
        this.messagesCount = resp.messages.count;
      })
  }

  sentMail(){
    this.reset = 0;
    this.inboxtype = false;
    this.loadedMessage = null;
    this.messagesService.getSentMessages(this.page)
      .subscribe((resp: any )  => {
        this.messages = resp.messages.rows;
        this.messagesCount = resp.messages.count;
      })
  }

  setPage( event ) {
    this.page = event;
    if (this.inboxtype) {
      this.inbox();
    } else {
      this.sentMail();
    }

  } 

}
