import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOptionSubscribeComponent } from './card-option-subscribe.component';

describe('CardOptionSubscribeComponent', () => {
  let component: CardOptionSubscribeComponent;
  let fixture: ComponentFixture<CardOptionSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOptionSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOptionSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
