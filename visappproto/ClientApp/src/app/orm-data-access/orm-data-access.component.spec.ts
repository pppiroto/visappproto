import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrmDataAccessComponent } from './orm-data-access.component';

describe('OrmDataAccessComponent', () => {
  let component: OrmDataAccessComponent;
  let fixture: ComponentFixture<OrmDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrmDataAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrmDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
