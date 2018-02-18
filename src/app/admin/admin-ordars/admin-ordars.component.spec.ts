import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdarsComponent } from './admin-ordars.component';

describe('AdminOrdarsComponent', () => {
  let component: AdminOrdarsComponent;
  let fixture: ComponentFixture<AdminOrdarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOrdarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrdarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
