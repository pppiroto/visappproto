import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDataAccessComponent } from './simple-data-access.component';

describe('SimpleDataAccessComponent', () => {
  let component: SimpleDataAccessComponent;
  let fixture: ComponentFixture<SimpleDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleDataAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
