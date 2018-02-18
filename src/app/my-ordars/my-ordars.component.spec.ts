import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdarsComponent } from './my-ordars.component';

describe('MyOrdarsComponent', () => {
  let component: MyOrdarsComponent;
  let fixture: ComponentFixture<MyOrdarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrdarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
