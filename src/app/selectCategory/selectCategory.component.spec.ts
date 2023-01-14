import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCategory } from './selectCategory.component';
import { IonicModule } from '@ionic/angular';

describe('SelectCategory', () => {

  let component: SelectCategory;
  let fixture: ComponentFixture<SelectCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectCategory],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
