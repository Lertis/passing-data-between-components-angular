import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentViewCComponent } from './parent-view-c.component';

describe('ParentViewCComponent', () => {
  let component: ParentViewCComponent;
  let fixture: ComponentFixture<ParentViewCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentViewCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentViewCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
