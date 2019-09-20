import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "recommended"
})
export class Recommended implements PipeTransform {
  transform(items: Array<any>, filter: boolean): Array<any> {
    if (filter) {
      return items.filter(item => item.recommended === true);
    } else {
      return items;
    }
  }
}
