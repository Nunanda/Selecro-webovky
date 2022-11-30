import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavodyKrokyComponent } from './navody-kroky.component';

describe('NavodyKrokyComponent', () => {
  let component: NavodyKrokyComponent;
  let fixture: ComponentFixture<NavodyKrokyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavodyKrokyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavodyKrokyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
