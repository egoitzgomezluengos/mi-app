import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tituloHtml'
})
export class TituloHtmlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    console.log(args);

    let salida="";

    if(args.length == 0 ){
      salida= '<h1>${value}</h1>';
    }else if(args.length == 1){
      salida= '<h1 style="color="${args[0]}">${value}</h1>';
    } 
    return salida;
  }

}
