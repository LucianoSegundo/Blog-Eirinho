import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TituloMenuComponent } from "./componente/titulo-menu/titulo-menu.component";
import { HomeComponent } from "./pagina/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TituloMenuComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
