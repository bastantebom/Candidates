import { Recommended } from "./../recommended.pipe";
import { Applicant } from "../applicant";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-candidatestabs",
  templateUrl: "./candidatestabs.component.html",
  styleUrls: ["./candidatestabs.component.css"]
})
export class CandidatestabsComponent implements OnInit {
  @Input() applicantsCount: Applicant[];

  @Output() recommendedClicked = new EventEmitter<any>();
  @Output() receivedClicked = new EventEmitter<any>();
  closeResult: string;
  newApplicant: Applicant;
  private modalRef: NgbModalRef;

  filterRecommended() {
    this.recommendedClicked.emit(true);
  }

  filterReceived() {
    this.receivedClicked.emit(false);
  }
  open(content) {
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

  onSavedCandidate(data) {
    //console.log(data);
    //console.log(this.applicantsCount.length + 1);
    this.newApplicant.id;
    this.newApplicant.firstname = data.firstname;
    this.newApplicant.lastname = data.lastname;
    this.newApplicant.phone = data.phone;
    this.newApplicant.email = data.email;
    this.newApplicant.desc = data.desc;
    this.newApplicant.recommended = false;
    this.newApplicant.status = "new";

    console.log(this.newApplicant);

    //this.applicantsCount.push(this.newApplicant);
    //this.modalRef.close();
  }

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}
}
