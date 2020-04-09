import { DashboardModule } from "./dashboard/dashboard.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlePerdasComponent } from "./controle-perdas.component";

@NgModule({
  declarations: [ControlePerdasComponent],
  imports: [CommonModule, DashboardModule],
})
export class ControlePerdasModule {}
