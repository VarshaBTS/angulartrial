import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StupidComponent } from './stupid.component';

describe('StupidComponent', () => {
  let component: StupidComponent;
  let fixture: ComponentFixture<StupidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StupidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StupidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
