import { Component } from '@angular/core';
import { TituloMenuComponent } from "../../componente/titulo-menu/titulo-menu.component";
import { CardGrandeComponent } from "../../componente/card-grande/card-grande.component";
import { CardPequenoComponent } from "../../componente/card-pequeno/card-pequeno.component";
import { MenuComponent } from "../../componente/menu/menu.component";

@Component({
  selector: 'app-home',
  imports: [TituloMenuComponent, CardGrandeComponent, CardPequenoComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
