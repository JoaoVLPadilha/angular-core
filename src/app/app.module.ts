import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseCardComponent } from './course-card/course-card.component';
import { NewSyntaxComponent } from './new-syntax/new-syntax.component';
import { CourseCardOldComponent } from './course-card-old/course-card-old.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CourseCardComponent,
    CourseCardOldComponent,
    NewSyntaxComponent,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
