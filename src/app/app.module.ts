import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { SubnavComponent } from "./subnav/subnav.component";

import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TabpillsComponent } from "./tabpills/tabpills.component";
import { CandidatestabsComponent } from "./candidatestabs/candidatestabs.component";
import { CandidatestableComponent } from "./candidatestable/candidatestable.component";

import { Recommended } from "./recommended.pipe";
import { ApplicantStatus } from "./applicantstatus.pipe";
import { FunneltimelineComponent } from "./funneltimeline/funneltimeline.component";
import { FunneltableComponent } from "./funneltable/funneltable.component";
import { ProfilemodalComponent } from "./profilemodal/profilemodal.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SubnavComponent,
    TabpillsComponent,
    CandidatestabsComponent,
    CandidatestableComponent,
    Recommended,
    ApplicantStatus,
    FunneltimelineComponent,
    FunneltableComponent,
    ProfilemodalComponent
  ],
  imports: [BrowserModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
