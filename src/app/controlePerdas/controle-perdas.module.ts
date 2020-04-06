import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { ControlePerdasComponent } from "./controle-perdas.component";

@NgModule({
  declarations: [HeaderComponent, ControlePerdasComponent],
  imports: [CommonModule],
})
export class ControlePerdasModule {}
