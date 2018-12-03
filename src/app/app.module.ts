import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiblingComponent } from './sibling/sibling.component';
import { ChildInputComponent } from './child-input/child.component';
import { ParentInputComponent } from './parent-input/parent.component';
import { ChildOutputComponent } from './child-output/child-output.component';
import { ParentOutputComponent } from './parent-output/parent-output.component';
import { ParentViewCComponent } from './parent-view-c/parent-view-c.component';
import { ChildViewCComponent } from './child-view-c/child-view-c.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [
    AppComponent,
    ParentInputComponent,
    ChildInputComponent,
    SiblingComponent,
    ChildOutputComponent,
    ParentOutputComponent,
    ParentViewCComponent,
    ChildViewCComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
