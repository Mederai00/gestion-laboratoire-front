import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardResponsableComponent } from './board-responsable.component';

describe('BoardResponsableComponent', () => {
  let component: BoardResponsableComponent;
  let fixture: ComponentFixture<BoardResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardResponsableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
