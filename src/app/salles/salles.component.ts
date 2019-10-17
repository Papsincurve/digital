import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.scss']
})
export class SallesComponent implements OnInit {
  @Input() salle : object;


  constructor() { }

  ngOnInit() {
  }

}
