import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapejsComponent } from './grapejs.component';

describe('GrapejsComponent', () => {
  let component: GrapejsComponent;
  let fixture: ComponentFixture<GrapejsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrapejsComponent]
    });
    fixture = TestBed.createComponent(GrapejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
