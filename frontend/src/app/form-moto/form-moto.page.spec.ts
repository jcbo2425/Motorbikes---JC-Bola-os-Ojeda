import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormMotoPage } from './form-moto.page';

describe('FormMotoPage', () => {
  let component: FormMotoPage;
  let fixture: ComponentFixture<FormMotoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
