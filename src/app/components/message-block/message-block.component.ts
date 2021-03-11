import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../core/store/models';
import { Store } from '@ngxs/store';
import { DeleteMessage } from '../../core/store/actions';

@Component({
  selector: 'app-message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.scss']
})
export class MessageBlockComponent implements OnInit {
  @Input() message!: Message;
  @Output() editMessage: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  updateMessage(message: Message): void {
    this.editMessage.emit(message);
  }

  deleteMessage(message: Message): void {
    this.store.dispatch(new DeleteMessage(message.id));
  }
}
