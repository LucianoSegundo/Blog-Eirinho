import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-grande',
  imports: [],
  templateUrl: './card-grande.component.html',
  styleUrl: './card-grande.component.css'
})
export class CardGrandeComponent {
@Input()
titulo:string = "";
@Input()
foto:string = "";
@Input()
descricao:string = "";
@Input()
id:string = "";
}
