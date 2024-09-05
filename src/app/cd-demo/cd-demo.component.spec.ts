import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdDemoComponent } from './cd-demo.component';

describe('CdDemoComponent', () => {
  let component: CdDemoComponent;
  let fixture: ComponentFixture<CdDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CdDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
