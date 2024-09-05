import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  // Primitive data
  primitiveData: number = 0;

  // Non-primitive data
  nonPrimitiveData: { value: string } = { value: 'Initial' };

  // Change detection timestamps

  // This count tracks how many times the primitive data was updated. It increments every time you click the "Update Primitive Data" button.
  parentPrimitiveUpdateCount: number = 0;

  // This count tracks how many times the non-primitive data reference was updated. It increments every time you click the "Update Non-Primitive Data" button.
  parentNonPrimitiveUpdateCount: number = 0;

  // Method to update primitive data
  updatePrimitiveData() {
    this.primitiveData++;
    this.parentPrimitiveUpdateCount++;
  }

  // Method to update non-primitive data
  updateNonPrimitiveData() {
    this.nonPrimitiveData = { value: 'Updated ' + Math.random() }; // Change reference
    this.parentNonPrimitiveUpdateCount++;
  }
}
