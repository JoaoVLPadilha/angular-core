import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  courses: Course[] = COURSES
  courseItem: Course = COURSES[0]

  onCourseSelected(course:Course){
    console.log('oi - card', course)
  }

  trackFunction(index: number, item: Course) {
    
      return item.description
  }

}
