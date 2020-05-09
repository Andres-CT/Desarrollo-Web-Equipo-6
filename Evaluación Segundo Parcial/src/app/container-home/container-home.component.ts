import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-home',
  templateUrl: './container-home.component.html',
  styleUrls: ['./container-home.component.scss']
  
  
    
})
export class ContainerHomeComponent implements OnInit {
  state: string = 'small'
  constructor() { }

  ngOnInit(): void {
  } 
 

}
