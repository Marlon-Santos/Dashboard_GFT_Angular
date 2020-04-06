import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlePerdasComponent } from './controle-perdas.component';

describe('ControlePerdasComponent', () => {
  let component: ControlePerdasComponent;
  let fixture: ComponentFixture<ControlePerdasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlePerdasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlePerdasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
