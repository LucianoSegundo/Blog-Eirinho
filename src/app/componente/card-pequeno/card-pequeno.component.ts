import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pequeno',
  imports: [],
  templateUrl: './card-pequeno.component.html',
  styleUrl: './card-pequeno.component.css'
})
export class CardPequenoComponent {
@Input()  
titulo:string = "";
@Input()
foto:string = "";
}
