import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemComponent } from './add-item.component';

describe('AddItemComponent', () => {
  let component: AddItemComponent;
  let fixture: ComponentFixture<AddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add two numbers correctly', () => {
    const result = component.addNumbers(2, 3);
    expect(result).toBe(5);
  });

  it('should return a number', () => {
    const result = component.addNumbers(2, 3);
    expect(typeof result).toBe('number');
  });

  it('should handle negative numbers', () => {
    const result = component.addNumbers(-2, -3);
    expect(result).toBe(-5);
  });

  it('should handle zero', () => {
    const result = component.addNumbers(0, 0);
    expect(result).toBe(0);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
