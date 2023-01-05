import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VereinComponent } from './verein.component';

describe('VereinComponent', () => {
  let component: VereinComponent;
  let fixture: ComponentFixture<VereinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VereinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VereinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
