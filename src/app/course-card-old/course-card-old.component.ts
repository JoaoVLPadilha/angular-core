import { Component, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-card-old',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card-old.component.html',
  styleUrl: './course-card-old.component.css'
})
export class CourseCardOldComponent {
  @Input()
  course: Course

  @Input({required: true})
  index: number

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor(){}
  ngOnInit(){

  }

  isImageVisible(){
    return this.course && this.course.iconUrl
  }

  onCourseViewed(){
    this.courseSelected.emit(this.course)
    console.log('oi - button')
  }
}
