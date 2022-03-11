import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosePerfilComponent } from './chose-perfil.component';

describe('ChosePerfilComponent', () => {
  let component: ChosePerfilComponent;
  let fixture: ComponentFixture<ChosePerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosePerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
