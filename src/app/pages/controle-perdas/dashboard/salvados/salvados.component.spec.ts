import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvadosComponent } from './salvados.component';

describe('SalvadosComponent', () => {
  let component: SalvadosComponent;
  let fixture: ComponentFixture<SalvadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
