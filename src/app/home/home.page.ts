import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  meuNom:string;
  mevaEdad:number;
  mostra:boolean=false;

  constrctor() {}

  introduirDades(){
    this.meuNom=this.meuNom;
    this.mevaEdad=this.mevaEdad;
  }

  mostrarDades(){
    if(this.mostra==true){
      this.mostra=false;
    }
    else if(this.mostra==false){
      this.mostra=true;
    }
  }
}