import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Applicant } from "../applicant";

@Component({
  selector: "app-funneltimeline",
  templateUrl: "./funneltimeline.component.html",
  styleUrls: ["./funneltimeline.component.css"]
})
export class FunneltimelineComponent implements OnInit {
  @Output() linkedClicked = new EventEmitter<any>();
  @Input() filterCount: Applicant[];

  funnelFilter(linkClick) {
    switch (linkClick) {
      case "r":
        this.linkedClicked.emit("reject");
        break;
      case "s":
        this.linkedClicked.emit("save");
        break;
      case "l":
        this.linkedClicked.emit("selection");
        break;
      case "b":
        this.linkedClicked.emit("backup");
        break;
      case "c":
        this.linkedClicked.emit("recos");
        break;
    }
  }

  getFunnelCount(targetLink) {
    let objArr = [];

    this.filterCount.find(function(obj) {
      if (obj.status === targetLink) {
        objArr.push(obj);
      }
    });

    return objArr.length > 0 ? objArr.length : 0;
  }

  constructor() {}

  ngOnInit() {}
}
