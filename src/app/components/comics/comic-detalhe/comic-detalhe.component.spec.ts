import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDetalheComponent } from './comic-detalhe.component';

describe('ComicDetalheComponent', () => {
  let component: ComicDetalheComponent;
  let fixture: ComponentFixture<ComicDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
