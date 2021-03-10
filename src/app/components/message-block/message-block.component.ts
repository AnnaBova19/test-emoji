import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.scss']
})
export class MessageBlockComponent implements OnInit {
  @Input() message: any = {};

  constructor() { }

  ngOnInit(): void {
  }
}
