import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  checked: boolean = false;
  listOfBonos: any[] = [
    {bonoPrepago: "Minutos ilimitados", selected:false},
    {bonoPrepago: "1GB de datos",selected:false },
    {bonoPrepago: "Minutos ilimitados", selected:false},
    {bonoPrepago: "1GB de datos",selected:false },
    {bonoPrepago: "Minutos ilimitados", selected:false},
    {bonoPrepago: "1GB de datos",selected:false },
  ]

  constructor() { }

  ngOnInit() {
  }

  public selectedBono(index: number): void{
    this.checked = true;
    for(let i = 0; i < this.listOfBonos.length; i++){
      if(i == index){
        this.listOfBonos[index].selected = true;
      }else{
        this.listOfBonos[i].selected = false;
      }
    }

    console.log(this.listOfBonos[index]);
  }

  public buttonClases(){

    if(this.checked){
      return ['tdp-button'];
    }else{
      return ['tdp-button-opaque'];
    }
  }

}
