import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessageComponent } from './message.component';
import { MessageBlockComponent } from '../../components/message-block/message-block.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PickerModule } from '@ctrl/ngx-emoji-mart';

const routes: Routes = [
  { path: '', component: MessageComponent }
];

@NgModule({
  declarations: [
    MessageComponent,
    MessageBlockComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,

    PickerModule,
  ],
  exports: [ RouterModule ],
  providers: [],
})
export class MessageModule { }