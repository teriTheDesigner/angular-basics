import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstnameComponent } from './firstname.component';

describe('FirstnameComponent', () => {
  let component: FirstnameComponent;
  let fixture: ComponentFixture<FirstnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstnameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
