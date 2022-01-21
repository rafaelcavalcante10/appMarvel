import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieListaComponent } from './serie-lista.component';

describe('SerieListaComponent', () => {
  let component: SerieListaComponent;
  let fixture: ComponentFixture<SerieListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
