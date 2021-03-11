import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Message } from './models';
import { GetMessages, AddMessage, UpdateMessage, DeleteMessage, ClearMessages } from './actions';

export interface MessageStateModel {
  messages: Message[];
}

@State<MessageStateModel>({
  name: 'messages',
  defaults: {
    messages: [],
  }
})

@Injectable()
export class MessagesState {
  constructor() { }

  @Selector()
  static getMessages(state: MessageStateModel) {
    return state.messages;
  }

  @Action(GetMessages)
  getMessages(ctx: StateContext<MessageStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
    });
  }

  @Action(AddMessage)
  addMessage(ctx: StateContext<MessageStateModel>, {payload}: AddMessage) {
    const state = ctx.getState();
    ctx.patchState({
      messages: [...state.messages, payload]
    });
  }

  @Action(UpdateMessage)
  editMessage(ctx: StateContext<MessageStateModel>, {payload}: UpdateMessage) {
    const state = ctx.getState();
    const messages = [...state.messages];
    const index = messages.findIndex(item => item.id === payload.id);
    messages[index] = payload;
    ctx.setState({
      ...state,
      messages: messages,
    });
  }

  @Action(DeleteMessage)
  deleteMessage(ctx: StateContext<MessageStateModel>, {id}: DeleteMessage) {
    const state = ctx.getState();
    const filteredArray = state.messages.filter(item => item.id !== id);
    ctx.setState({
      ...state,
      messages: filteredArray,
    });
  }

  @Action(ClearMessages)
  clearMessages(ctx: StateContext<MessageStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      messages: [],
    });
  }
}