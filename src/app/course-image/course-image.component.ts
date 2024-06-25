import { AfterViewInit, Component, Input } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from "@angular/common";
@Component({
  selector: 'course-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css'
})
export class CourseImageComponent implements AfterViewInit {
  
  @Input()
  course: Course;

  constructor(){
  }

  ngAfterViewInit(): void {
    // console.log(this.course.iconUrl)
  }
}
