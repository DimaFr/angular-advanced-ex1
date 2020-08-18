import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksSearchDir } from './directives/tasks.directive';
import {TasksService} from './services/tasks.service';

import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TasksSearchDir,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
 
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
