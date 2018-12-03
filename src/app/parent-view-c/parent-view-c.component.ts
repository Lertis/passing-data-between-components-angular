import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { ChildViewCComponent } from '../child-view-c/child-view-c.component';

@Component({
  selector: 'app-parent-view-c',
  template: `
  <div class="pc">
  <h2>Parent</h2>
  <p>Message: {{message}}</p>
  <app-child-view-c></app-child-view-c>
</div>
  `,
  styleUrls: ['./parent-view-c.component.css']
})
export class ParentViewCComponent implements AfterContentInit {

  @ViewChild(ChildViewCComponent) child;

  constructor() { }

  message = 'Nothing';

  ngAfterContentInit() {
    this.message = this.child.message;
  }
}
