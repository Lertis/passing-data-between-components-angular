import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-output',
  template: `
  <div class="children-o">
  <h3>Child</h3>
  <p>Say: {{message}}</p>
  <button mat-raised-button (click)="sendMessage()" class="butS">Send Message</button>
  </div>
`,
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {

  message = 'I am passed from the Child component';
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

}
