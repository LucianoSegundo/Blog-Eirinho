import { Component } from '@angular/core';
import { dados, artigo} from "../../dados/dados"
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina',
  imports: [],
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css'
})
export class PaginaComponent {
  foto:string=""
  titulo:string= "";
  descricao:string= "";
  id:string| null = "";
constructor(private activatedRoute: ActivatedRoute) {
  activatedRoute.paramMap.subscribe(params => {
    this.id = params.get('id');
  });

  if(this.id == null) this.id = "0";
 
  const artigo = dados.filter(artigo => artigo.id == this.id)[0]
  this.foto = artigo.foto;
  this.titulo = artigo.titulo;
  this.descricao= artigo.descricao
}
}
