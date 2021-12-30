import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonelistComponentComponent } from './phonelist-component.component';

describe('PhonelistComponentComponent', () => {
  let component: PhonelistComponentComponent;
  let fixture: ComponentFixture<PhonelistComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonelistComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonelistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
