import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirinfosComponent } from './voirinfos.component';

describe('VoirinfosComponent', () => {
  let component: VoirinfosComponent;
  let fixture: ComponentFixture<VoirinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
