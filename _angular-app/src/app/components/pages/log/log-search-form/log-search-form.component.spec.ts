import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogSearchFormComponent } from './log-search-form.component';

describe('LogSearchFormComponent', () => {
  let component: LogSearchFormComponent;
  let fixture: ComponentFixture<LogSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
