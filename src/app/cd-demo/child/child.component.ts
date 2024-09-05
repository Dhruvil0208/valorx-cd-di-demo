import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input() data: { value: string } = { value: 'Initial' };

  // Local data in child component
  localData: number = 0;

  // Change detection timestamps
  childDataUpdateCount: number = 0;

  constructor(private cd: ChangeDetectorRef) {}

  // Method to update local data
  updateLocalData() {
    this.localData++;
  }

  // Detect changes manually to update the count
  ngOnChanges() {
    this.childDataUpdateCount++;
  }
}
