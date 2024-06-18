import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardOldComponent } from './course-card-old.component';

describe('CourseCardOldComponent', () => {
  let component: CourseCardOldComponent;
  let fixture: ComponentFixture<CourseCardOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardOldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseCardOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
