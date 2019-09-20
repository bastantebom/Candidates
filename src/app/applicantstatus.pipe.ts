import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "applicantstatus",
  pure: false
})
export class ApplicantStatus implements PipeTransform {
  transform(items: Array<any>, status: string): Array<any> {
    //alert(status);
    if (status) {
      return items.filter(item => item.status == status);
    } else {
      return items;
    }
  }
}
