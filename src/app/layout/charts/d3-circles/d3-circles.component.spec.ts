import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3CirclesComponent } from './d3-circles.component';

describe('D3CirclesComponent', () => {
  let component: D3CirclesComponent;
  let fixture: ComponentFixture<D3CirclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3CirclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3CirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
