import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicListaComponent } from './comic-lista.component';

describe('ComicListaComponent', () => {
  let component: ComicListaComponent;
  let fixture: ComponentFixture<ComicListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
