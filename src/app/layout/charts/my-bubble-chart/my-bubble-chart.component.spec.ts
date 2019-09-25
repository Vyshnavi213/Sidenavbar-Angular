import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBubbleChartComponent } from './my-bubble-chart.component';

describe('MyBubbleChartComponent', () => {
  let component: MyBubbleChartComponent;
  let fixture: ComponentFixture<MyBubbleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBubbleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBubbleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
