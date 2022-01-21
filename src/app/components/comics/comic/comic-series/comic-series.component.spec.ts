import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicSeriesComponent } from './comic-series.component';

describe('ComicSeriesComponent', () => {
  let component: ComicSeriesComponent;
  let fixture: ComponentFixture<ComicSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
