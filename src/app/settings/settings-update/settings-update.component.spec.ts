import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUpdateComponent } from './settings-update.component';

describe('SettingsUpdateComponent', () => {
  let component: SettingsUpdateComponent;
  let fixture: ComponentFixture<SettingsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
