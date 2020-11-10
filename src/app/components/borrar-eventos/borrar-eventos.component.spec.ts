import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarEventosComponent } from './borrar-eventos.component';

describe('BorrarEventosComponent', () => {
  let component: BorrarEventosComponent;
  let fixture: ComponentFixture<BorrarEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
