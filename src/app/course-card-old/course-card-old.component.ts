import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, Input, Output, QueryList } from "@angular/core";
import { Course } from "../model/course";
import { EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card-old",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./course-card-old.component.html",
  styleUrl: "./course-card-old.component.css",
})
export class CourseCardOldComponent implements AfterViewInit, AfterContentInit{
  @Input()
  course: Course;

  @Input({ required: true })
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent)
  image;
  @ContentChildren(CourseImageComponent)
  images: QueryList<CourseImageComponent>;

  constructor() {}
  ngOnInit() {}

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  isBeginner() {
    return this.course.category === "BEGINNER";
  }

  onCourseViewed() {
    this.courseSelected.emit(this.course);
    console.log("oi - button");
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.images)
  }

  cardStyle() {
    return {
      // "background-image": "url(" + this.course.iconUrl + ")",
      // "background-size": "cover"
    };
  }
}
