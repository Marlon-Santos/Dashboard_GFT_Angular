import { DashboardComponent } from "./pages/controle-perdas/dashboard/dashboard.component";
import { ControlePerdasComponent } from "./pages/controle-perdas/controle-perdas.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ControlePerdasComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
