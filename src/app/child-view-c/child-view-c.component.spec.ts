import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildViewCComponent } from './child-view-c.component';

describe('ChildViewCComponent', () => {
  let component: ChildViewCComponent;
  let fixture: ComponentFixture<ChildViewCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildViewCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildViewCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
