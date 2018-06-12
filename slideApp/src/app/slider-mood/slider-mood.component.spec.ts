import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMoodComponent } from './slider-mood.component';

describe('SliderMoodComponent', () => {
  let component: SliderMoodComponent;
  let fixture: ComponentFixture<SliderMoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderMoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
