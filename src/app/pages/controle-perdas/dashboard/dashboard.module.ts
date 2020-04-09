import { SharedModule } from "./../../../shared/shared.module";
import { MatCardModule } from "@angular/material/card";
import { NgModule, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { ServicoComponent } from "./servico/servico.component";
import { NovoCarregamentoComponent } from "./novo-carregamento/novo-carregamento.component";
import { SalvadosComponent } from "./salvados/salvados.component";
import { MatRadioModule } from "@angular/material/radio";
import { ThemePalette } from "@angular/material/core";
import { RadiosComponent } from './radios/radios.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ServicoComponent,
    NovoCarregamentoComponent,
    SalvadosComponent,
    RadiosComponent,
  ],
  imports: [CommonModule, MatCardModule, SharedModule, MatRadioModule],
  exports: [DashboardComponent],
})
export class DashboardModule {
  constructor() {}
  @Input()
  color: ThemePalette;
}
