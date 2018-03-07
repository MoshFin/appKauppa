import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutCardComponent } from './produt-card.component';

describe('ProdutCardComponent', () => {
  let component: ProdutCardComponent;
  let fixture: ComponentFixture<ProdutCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
