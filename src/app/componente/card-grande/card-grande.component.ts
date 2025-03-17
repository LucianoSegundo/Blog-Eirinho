import { Component } from '@angular/core';

@Component({
  selector: 'app-card-grande',
  imports: [],
  templateUrl: './card-grande.component.html',
  styleUrl: './card-grande.component.css'
})
export class CardGrandeComponent {
titulo:string = "jogadores selvagens de minecraft destroem o mundo";
foto:string = "https://happy.com.br/wp-content/uploads/2015/11/minecraft-para-jovens.jpg";
descricao:string = "jogadores selvagens de minecraft destroem o mundo, nenhum bloco está a salvo, eles estão coletanto tudo seja pedra, terra, minerio, agua, nenhum bloco mesmo está a salvo, em alguns pontos a badrock está faltando, como conseguiram fazer isso?";
id:number = 1;
}
