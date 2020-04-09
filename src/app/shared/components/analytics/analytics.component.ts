import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
})
export class AnalyticsComponent implements OnInit {
  constructor() {}
  @Input() subTitulo = "";
  @Input() width = "";
  get getWidth() {
    return this.width + "px";
  }
  ngOnInit() {}
}
