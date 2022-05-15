import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariopagoComponent } from './formulariopago.component';

describe('FormulariopagoComponent', () => {
  let component: FormulariopagoComponent;
  let fixture: ComponentFixture<FormulariopagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariopagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
