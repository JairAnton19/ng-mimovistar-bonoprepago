import { Bono } from './../../models/bono.model';
import { Component, OnInit } from '@angular/core';
import { BonoService } from 'src/app/services/bono.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  checked: boolean = false;
  bonoSelected: Bono = new Bono;
  listOfBonos: any[] = [
    {bonoPrepago: "Minutos ilimitados", type:'call', selected:false},
    {bonoPrepago: "1GB de datos",type:'internet', selected:false },
  ]

  constructor(
    private bonoService: BonoService,
    private route: Router,

  ) { 
  }

  ngOnInit() {
  }

  public selectedBono(index: number): void{
    this.checked = true;
    this.bonoSelected.name = this.listOfBonos[index].bonoPrepago;
    this.bonoSelected.type = this.listOfBonos[index].type;

    for(let i = 0; i < this.listOfBonos.length; i++){
      if(i == index){
        this.listOfBonos[index].selected = true;
      }else{
        this.listOfBonos[i].selected = false;
      }
    }
  }

  // change button clases
  public buttonClases(){
    if(this.checked){
      return ['tdp-button'];
    }else{
      return ['tdp-button-opaque'];
    }
  }

  //Set data of bonus selected
  public sendData():void{
    this.bonoService.setBono(this.bonoSelected);
    this.route.navigate(['/canje']);
  }

  public linkRouter():void{
    this.route.navigate(['/bono-detail']);
  }

}
