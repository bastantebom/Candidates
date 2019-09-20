import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Applicant } from "./applicant";
import { APPLICANTS } from "./applicant-mock";

@Injectable({
  providedIn: "root"
})
export class ApplicantService {
  constructor() {}

  getApplicants(): Observable<Applicant[]> {
    return of(APPLICANTS);
  }
}
