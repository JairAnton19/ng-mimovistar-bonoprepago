import { DetectedPlatform } from './../../functions/detectedPlatform';
import { Bono } from './../../models/bono.model';
import { Component, OnInit} from '@angular/core';
import { BonoService } from 'src/app/services/bono.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit {

  platform = null
  checked: boolean = false;
  bonoSelected: Bono = new Bono;
  listOfBonos: any[] = [
    {bonoPrepago: "Minutos ilimitados", type:'call',selected:false},
    {bonoPrepago: "1GB de datos",type:'internet',selected:false},
  ]

  constructor(private bonoService: BonoService,private route: Router,private detectedPlatform: DetectedPlatform) { 
  }

  ngOnInit() {

    this.platform = this.detectedPlatform.detectPlatform()

  }

  public selectedBono(index: number){

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

    return ({checked:this.checked,name:this.bonoSelected.name,type:this.bonoSelected.type})

    
  }

  // change button clases
  public buttonClases(valor:boolean){
    if(valor){
      return ['tdp-button',this.platform=='ios'?'fontIos':'fontAndroid'];
    }else{
      return ['tdp-button-opaque',this.platform=='ios'?'fontIos':'fontAndroid'];
    }
  }

  //Set data of bonus selected
  public sendData(valor:boolean):void{
    if(valor){
      this.bonoService.setBono(this.bonoSelected);
      this.route.navigate(['/canje'])
    }
  }

  public linkRouter(ruta:string):void{
      this.route.navigate([ruta])
  }

}
