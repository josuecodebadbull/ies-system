import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const pipe = value
      .replaceAll('a', '4')
      .replaceAll('e', '3')
      .replaceAll('i', '1')
      .replaceAll('o', '0')
      .replaceAll('u', '9')
    return pipe;
  }

}
