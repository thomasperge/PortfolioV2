import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftProjectComponent } from './left-project.component';

describe('LeftProjectComponent', () => {
  let component: LeftProjectComponent;
  let fixture: ComponentFixture<LeftProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftProjectComponent]
    });
    fixture = TestBed.createComponent(LeftProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
