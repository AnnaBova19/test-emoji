import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';
import { MessagesState } from '../../core/store/state';
import { Message } from '../../core/store/models';
import { AddMessage, UpdateMessage, ClearMessages } from '../../core/store/actions';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  message = new FormControl('');
  newMessageId: number = 0;
  updatedMessageId!: number;
  isEmojiPickerVisible: boolean = false;
  isNewMessage: boolean = false;

  @Select(MessagesState.getMessages) messages!: Observable<Message[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {

  }

  addEmoji(event: any) {
    this.message.setValue(`${this.message.value}${event.emoji.native}`);
  }

  send() {
    this.isEmojiPickerVisible = false;
    if (this.message.value !== '') {
      this.store.dispatch(new AddMessage({
        id: this.newMessageId,
        text: this.message.value,
        date: new Date()
      }));
    }
    this.message.setValue('');
    this.newMessageId++;
  }

  onEditMessage(event: Message) {
    this.isNewMessage = true;
    this.updatedMessageId = event.id;
    this.message.setValue(event.text);
  }

  update() {
    this.isEmojiPickerVisible = false;
    this.store.dispatch(new UpdateMessage({
      id: this.updatedMessageId,
      text: this.message.value,
      date: new Date(),
      updated: true
    }));
    this.isNewMessage = false;
    this.message.setValue('');
  }

  clear() {
    this.store.dispatch(new ClearMessages());
  }
}
