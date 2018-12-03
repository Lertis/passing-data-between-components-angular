import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <div class="pi">
  <h2>Parent</h2>
  <app-child [message]="showThis"></app-child>
</div>
`,
  styleUrls: ['./parent.component.css']
})
export class ParentInputComponent implements OnInit {

  constructor() { }

  showThis = 'this message passed from parent to child';

  ngOnInit() {
  }

}
