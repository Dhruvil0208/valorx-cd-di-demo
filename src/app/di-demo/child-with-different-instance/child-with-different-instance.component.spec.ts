import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithDifferentInstanceComponent } from './child-with-different-instance.component';

describe('ChildWithDifferentInstanceComponent', () => {
  let component: ChildWithDifferentInstanceComponent;
  let fixture: ComponentFixture<ChildWithDifferentInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildWithDifferentInstanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildWithDifferentInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
