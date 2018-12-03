import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-view-c',
  template: `
  <div class="children">
  <h3>Child</h3>
  <p>Say: {{message}}</p>
  </div>
`,
  styleUrls: ['./child-view-c.component.css']
})
export class ChildViewCComponent implements OnInit {

  message = 'Message from the Child component via @ViewChild';

  constructor() { }

  ngOnInit() {
  }

}
