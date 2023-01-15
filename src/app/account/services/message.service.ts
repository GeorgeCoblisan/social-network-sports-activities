import {Injectable} from '@angular/core';
import {Message} from "../models/message";

@Injectable({providedIn: 'root'})
export class MessageService {

  messages: Message[] = []

  sendMessage(message: Message): void {
    this.messages.push(message);
  }

  getAll(): Message[] {
    return this.messages;
  }
}
