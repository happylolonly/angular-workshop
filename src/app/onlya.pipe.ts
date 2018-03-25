import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlya'
})
export class OnlyaPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return value.filter((item) => item === 'b');
  }

}
