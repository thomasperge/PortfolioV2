import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightProjectComponent } from './right-project.component';

describe('RightProjectComponent', () => {
  let component: RightProjectComponent;
  let fixture: ComponentFixture<RightProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightProjectComponent]
    });
    fixture = TestBed.createComponent(RightProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
