import { Component } from '@angular/core';
import { TituloMenuComponent } from "../../componente/titulo-menu/titulo-menu.component";
import { CardGrandeComponent } from "../../componente/card-grande/card-grande.component";

@Component({
  selector: 'app-home',
  imports: [TituloMenuComponent, CardGrandeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
