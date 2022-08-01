import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacidadesComponent } from './capacidades.component';

describe('CapacidadesComponent', () => {
  let component: CapacidadesComponent;
  let fixture: ComponentFixture<CapacidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
