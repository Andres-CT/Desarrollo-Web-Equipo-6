import { Component, OnInit } from '@angular/core';
import { User } from './user'
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {

  constructor() { }
  tipoPersonas = ["Reportero","Agente de la SSP", "Transeunte", "Comerciante", "Otro"];
  userModel = new User('','','','','', '','', null);
  ngOnInit(): void {
  }

}
