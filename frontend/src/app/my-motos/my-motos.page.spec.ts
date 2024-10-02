import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyMotosPage } from './my-motos.page';

describe('MyMotosPage', () => {
  let component: MyMotosPage;
  let fixture: ComponentFixture<MyMotosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
