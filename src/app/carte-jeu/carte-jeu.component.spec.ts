import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteJeuComponent } from './carte-jeu.component';

describe('CarteJeuComponent', () => {
  let component: CarteJeuComponent;
  let fixture: ComponentFixture<CarteJeuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteJeuComponent]
    });
    fixture = TestBed.createComponent(CarteJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
