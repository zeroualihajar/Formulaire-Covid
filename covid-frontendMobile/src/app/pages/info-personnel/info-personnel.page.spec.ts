import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoPersonnelPage } from './info-personnel.page';

describe('InfoPersonnelPage', () => {
  let component: InfoPersonnelPage;
  let fixture: ComponentFixture<InfoPersonnelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPersonnelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoPersonnelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
