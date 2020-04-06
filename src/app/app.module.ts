import { ControlePerdasModule } from "./controlePerdas/controle-perdas.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ControlePerdasModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
