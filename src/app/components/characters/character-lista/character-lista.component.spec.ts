import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListaComponent } from './character-lista.component';

describe('CharacterListaComponent', () => {
  let component: CharacterListaComponent;
  let fixture: ComponentFixture<CharacterListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
