import {Component, OnInit} from '@angular/core';
import {Message} from "../models/message";
import {MessageService} from "../services/message.service";
import {AccountService} from "../services/account.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  messages: Message[] = [];
  messageInput: string;
  user: User =
    {
      name: 'George',
      email: 'george@gmail.com',
      password: 'george',
    }


  constructor(private readonly messageService: MessageService,
              private readonly userService: AccountService) {
  }

  ngOnInit() {
  }

  sendMessage() {
    const date = new Date();
    let message: Message = {
      sender: this.user,
      text: this.messageInput,
      timestamp: `${date.getHours()}:${date.getMinutes()}`
    }
    this.messageService.sendMessage(message);
    message = {
      text: "BASIC RESPONSE MAN",
      timestamp: `${date.getHours()}:${date.getMinutes()}`
    }
    this.messageService.sendMessage(message);
    this.messages = this.messageService.getAll();
    console.log(this.messages)
  }
}
