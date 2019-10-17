import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

	private salless = [{nom: "sall-ade", nbjoueurs:5, prive : false }, {nom: "salsifi", nbjoueurs:2, prive : true }, {nom: "salaire", nbjoueurs:8, prive : false }]
    
  constructor() { }

  ngOnInit() {
  }

}
