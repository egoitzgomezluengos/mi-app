import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})
export class HolaComponent implements OnInit {

  nombre: string;
  fechaNac: Date;
  mostrar: boolean = true;
  claseTitulo: string;
  numero: number = 3.1411434344;
  constructor() { 
    console.log('iniciando componente HolaComponent');
    this.nombre = 'Egoitz';
    this.fechaNac = new Date();
    this.claseTitulo = 'titulo1';
  }

  ngOnInit(): void {
    console.log('... en init');
  }

  public cambiarEstilo(): void{
    if(this.claseTitulo === 'titulo1'){
      this.claseTitulo = 'titulo2';
    }else{
      this.claseTitulo = 'titulo1';
    }
     
  }

}
