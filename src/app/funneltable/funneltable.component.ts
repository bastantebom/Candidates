import { Component, OnInit, Input } from "@angular/core";
import { Applicant } from "../applicant";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-funneltable",
  templateUrl: "./funneltable.component.html",
  styleUrls: ["./funneltable.component.css"]
})
export class FunneltableComponent implements OnInit {
  @Input() funnelList: Applicant[];
  @Input() funnelStatus: string;
  @Input() moveStatus: any[];
  closeResult: string;

  //@Input() clickedReject: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  moveToClicked(applicant: Applicant) {
    let statusArr = ["reject", "save", "selection", "backup", "recos"];
    let objArr = [];

    /*statusArr.find(function(arr) {
      if (arr != applicant.status) {
        objArr.push(arr);
      }

      return true;
    });*/

    statusArr.forEach(arr => {
      if (arr != applicant.status) {
        objArr.push(arr);
      }
    });
    //console.log(objArr);
    this.moveStatus = objArr;
  }

  onChangeStatus(applicant: Applicant, newStat: string) {
    applicant.status = newStat;

    //console.log(applicant);
    //this.selectedApplicant = applicant;
    let updateItem = this.funnelList.find(this.findIndexToUpdate, applicant.id);
    let index = this.funnelList.indexOf(updateItem);
    if (index !== -1) {
      this.funnelList.splice(index, 1);
    }
    this.funnelList.push(applicant);
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
