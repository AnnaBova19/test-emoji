import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { MessagesState } from './core/store/state';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule.withConfig({
      ssrObserveBreakpoints: [
      'xs',
      'sm',
      'md',
      'lt-sm',
      'gt-sm',
      'gt-md',
      'lt-md',
      'lt-lg',
      'gt-lg'
      ]
    }),
    NgxsModule.forRoot([
      MessagesState
    ]),
    NgxsStoragePluginModule.forRoot({
      key: 'messages'
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
