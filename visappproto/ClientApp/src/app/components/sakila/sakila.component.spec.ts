import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SakilaComponent } from './sakila.component';

describe('SakilaComponent', () => {
  let component: SakilaComponent;
  let fixture: ComponentFixture<SakilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SakilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SakilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
