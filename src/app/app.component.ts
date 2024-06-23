import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";
import { CourseCardOldComponent } from "./course-card-old/course-card-old.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses: Course[] = COURSES;
  courseItem: Course = COURSES[0];

  @ViewChild(CourseCardOldComponent, { read: ElementRef })
  card: ElementRef;

  @ViewChild(CourseCardOldComponent)
  containerDiv: CourseCardComponent;

  @ViewChildren(CourseCardOldComponent)
  componentsChildren: QueryList<CourseCardComponent>;

  onCourseSelected(course: Course) {
    // console.log('', this.containerDiv)
  }

  ngAfterViewInit(): void {
    this.componentsChildren.changes.subscribe((courses) =>
      console.log(courses)
    );
  }

  editCourse() {
    this.courses.push({
      id: 1,
      description: "Angular Core Deep Dive",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      longDescription:
        "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: "INTERMEDIATE",
      lessonsCount: 10,
    });
  }

  trackFunction(index: number, item: Course) {
    return item.description;
  }
}
