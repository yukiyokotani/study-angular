import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miliLiter',
})
export class MiliLiterPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (!value) return '';
    return `${value} ml`;
  }
}
