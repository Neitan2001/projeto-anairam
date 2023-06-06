import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoNamoroComponent } from './tempo-namoro.component';

describe('TempoNamoroComponent', () => {
  let component: TempoNamoroComponent;
  let fixture: ComponentFixture<TempoNamoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempoNamoroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoNamoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
