import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3DoughnutChartComponent } from './d3-doughnut-chart.component';

describe('D3DoughnutChartComponent', () => {
  let component: D3DoughnutChartComponent;
  let fixture: ComponentFixture<D3DoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3DoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3DoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
