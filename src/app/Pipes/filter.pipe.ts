import { Pipe, PipeTransform } from '@angular/core';

/*
 * reson for pure: false is to update the view when the data changes
 * in the filter-pipes.component.html file  if the *add user* button is clicked
 * the view will not be update because the pipe is pure by default value is true
 * therefore we need to set it to false
 */
@Pipe({
  name: 'CustomFilter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];
    for (const user of value) {
      if (user.name.toLowerCase().includes(filterString.toLowerCase())) {
        resultArray.push(user);
      }
    }
    return resultArray;
  }
}
