import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraiteComponent } from './traite.component';

describe('TraiteComponent', () => {
  let component: TraiteComponent;
  let fixture: ComponentFixture<TraiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
