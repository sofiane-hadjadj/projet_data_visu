import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormExampleComponent } from './select-form-example.component';

describe('SelectFormExampleComponent', () => {
  let component: SelectFormExampleComponent;
  let fixture: ComponentFixture<SelectFormExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFormExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
