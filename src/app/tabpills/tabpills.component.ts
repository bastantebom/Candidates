import { Component, OnInit } from "@angular/core";
import { ApplicantService } from "../applicant-service";
import { Applicant } from "../applicant";

@Component({
  selector: "app-tabpills",
  templateUrl: "./tabpills.component.html",
  styleUrls: ["./tabpills.component.css"]
})
export class TabpillsComponent implements OnInit {
  applicants: Applicant[];
  clickedRecommended: boolean = false;
  clickedReceived: boolean = false;
  clickedLink: string;

  constructor(private applicantService: ApplicantService) {}

  pillRecommendedClicked(passdata: any) {
    this.clickedRecommended = passdata;
  }

  pillReceivedClicked(passdata: any) {
    this.clickedRecommended = passdata;
  }

  timelineButtonClicked(passdata: any) {
    this.clickedLink = passdata;
  }

  ngOnInit() {
    this.getApplicants();
  }

  getApplicants(): void {
    this.applicantService
      .getApplicants()
      .subscribe(applicants => (this.applicants = applicants));
  }
}
