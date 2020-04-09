import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoCarregamentoComponent } from './novo-carregamento.component';

describe('NovoCarregamentoComponent', () => {
  let component: NovoCarregamentoComponent;
  let fixture: ComponentFixture<NovoCarregamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoCarregamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoCarregamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
