import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnalyticsComponent } from "./components/analytics/analytics.component";

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [CommonModule],
  exports: [AnalyticsComponent],
})
export class SharedModule {}
