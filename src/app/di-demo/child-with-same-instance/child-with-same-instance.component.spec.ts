import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithSameInstanceComponent } from './child-with-same-instance.component';

describe('ChildWithSameInstanceComponent', () => {
  let component: ChildWithSameInstanceComponent;
  let fixture: ComponentFixture<ChildWithSameInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildWithSameInstanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildWithSameInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
