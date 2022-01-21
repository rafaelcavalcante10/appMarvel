import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetalheComponent } from './character-detalhe.component';

describe('CharacterDetalheComponent', () => {
  let component: CharacterDetalheComponent;
  let fixture: ComponentFixture<CharacterDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
