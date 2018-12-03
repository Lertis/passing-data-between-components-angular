import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-output',
  template: `
  <div class="po">
  <h2>Parent</h2>
  <p>Message: {{message}}</p>
  <app-child-output (messageEvent)="recieveMessage($event)"></app-child-output>
</div>
  `,
  styleUrls: ['./parent-output.component.css']
})
export class ParentOutputComponent implements OnInit {

  constructor() { }

  message = 'Nothing';

  ngOnInit() {
  }

  recieveMessage($event) {
    this.message = $event;
  }
}
