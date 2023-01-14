import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Discover } from './discover.component';
import { IonicModule } from '@ionic/angular';

describe('Discover', () => {

  let component: Discover;
  let fixture: ComponentFixture<Discover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Discover],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Discover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
