import { Component } from '@angular/core';
import { TituloMenuComponent } from "../../componente/titulo-menu/titulo-menu.component";
import { CardGrandeComponent } from "../../componente/card-grande/card-grande.component";
import { CardPequenoComponent } from "../../componente/card-pequeno/card-pequeno.component";
import { dados, artigo} from "../../dados/dados"

@Component({
  selector: 'app-home',
  imports: [TituloMenuComponent, CardGrandeComponent, CardPequenoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
fotoGrande:string=""
tituloGrande:string= "";
descricaoGrande:string= "";
idGrande:string = "";

constructor(){
  const indiceAleatorio = Math.floor(Math.random() * dados.length);
 let capa= dados[indiceAleatorio];
 this.fotoGrande = capa.foto;
 this.descricaoGrande = capa.descricao;
 this.tituloGrande = capa.titulo;
 this.idGrande = capa.id;
}
artigos:artigo[] = dados;

}
