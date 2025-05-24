import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaLinhaTempoComponent } from './bola-linha-tempo.component';

describe('BolaLinhaTempoComponent', () => {
  let component: BolaLinhaTempoComponent;
  let fixture: ComponentFixture<BolaLinhaTempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolaLinhaTempoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolaLinhaTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
