import { Component, Input } from '@angular/core';

@Component({
  selector: 'testchild',
  templateUrl: './testchild.html'
})
export class TestChild {
  @Input() someData: string;
}
