import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  message = new FormControl('');
  isEmojiPickerVisible: boolean = false;
  messages: any = [];

  constructor() { }

  ngOnInit(): void {

  }

  addEmoji(event: any) {
    this.message.setValue(`${this.message.value}${event.emoji.native}`);
  }

  save() {
    this.isEmojiPickerVisible = false;
    this.messages.push({
      text: this.message.value,
      date: new Date()
    });
    this.message.setValue('');
  }
}
