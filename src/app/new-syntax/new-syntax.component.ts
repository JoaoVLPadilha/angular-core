import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from '../model/course';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'new-syntax',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './new-syntax.component.html',
  styleUrl: './new-syntax.component.css'
})
export class NewSyntaxComponent {
  
  courses: Course[] = COURSES

  onCourseSelected(course:Course){
    console.log('oi - card', course)
  }
}
