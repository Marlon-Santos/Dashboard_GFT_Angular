import { RouterModule } from "@angular/router";
import { PagesModule } from "./../pages/pages.module";
import { HeaderComponent } from "./components/header/header.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, PagesModule, RouterModule],
  exports: [PagesModule, HeaderComponent],
})
export class CoreModule {}
