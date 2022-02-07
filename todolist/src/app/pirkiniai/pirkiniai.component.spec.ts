import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PirkiniaiComponent } from './pirkiniai.component';

describe('PirkiniaiComponent', () => {
  let component: PirkiniaiComponent;
  let fixture: ComponentFixture<PirkiniaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PirkiniaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PirkiniaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
