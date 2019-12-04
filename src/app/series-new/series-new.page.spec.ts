import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesNewPage } from './series-new.page';

describe('SeriesNewPage', () => {
  let component: SeriesNewPage;
  let fixture: ComponentFixture<SeriesNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
