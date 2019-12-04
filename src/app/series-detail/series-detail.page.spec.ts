import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesDetailPage } from './series-detail.page';

describe('SeriesDetailPage', () => {
  let component: SeriesDetailPage;
  let fixture: ComponentFixture<SeriesDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
