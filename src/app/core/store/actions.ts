import { Message } from './models';

export class GetMessages {
  static readonly type = '[Message] Get';
}

export class AddMessage {
  static readonly type = '[Message] Add';

  constructor(public payload: Message) {
  }
}

export class UpdateMessage {
  static readonly type = '[Message] Update';

  constructor(public payload: Message) {
  }
}

export class DeleteMessage {
  static readonly type = '[Message] Delete';

  constructor(public id: number) {
  }
}

export class ClearMessages {
  static readonly type = '[Message] Clear';

  constructor() {
  }
}