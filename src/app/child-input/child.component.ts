import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div class="children-i">
  <h3>Child</h3>
  <p>Say: {{message}}</p>
  </div>
`,
  styleUrls: ['./child.component.css']
})
export class ChildInputComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
