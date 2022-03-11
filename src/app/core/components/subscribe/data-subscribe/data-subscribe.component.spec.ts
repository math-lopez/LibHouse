import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSubscribeComponent } from './data-subscribe.component';

describe('DataSubscribeComponent', () => {
  let component: DataSubscribeComponent;
  let fixture: ComponentFixture<DataSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
