import { Component, OnInit, Input } from "@angular/core";
import { Applicant } from "../applicant";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-candidatestable",
  templateUrl: "./candidatestable.component.html",
  styleUrls: ["./candidatestable.component.css"]
})
export class CandidatestableComponent implements OnInit {
  @Input() applicantsList: Applicant[];
  @Input() clickedRecommended: any;
  closeResult: string;
  //@Input() selectedApplicant: Applicant;
  //@Input() loadedStatus: string = "new";

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  onChangeStatus(applicant: Applicant, newStat: string) {
    newStat === "s"
      ? (applicant.status = "save")
      : (applicant.status = "reject");
    //console.log(applicant);
    //this.selectedApplicant = applicant;
    let updateItem = this.applicantsList.find(
      this.findIndexToUpdate,
      applicant.id
    );
    let index = this.applicantsList.indexOf(updateItem);
    if (index !== -1) {
      this.applicantsList.splice(index, 1);
    }
    this.applicantsList.push(applicant);
  }

  findIndexToUpdate(applicant) {
    return applicant.id === this;
  }

  open(content, applcnt: Applicant) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
