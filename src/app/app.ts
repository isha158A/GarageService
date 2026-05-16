import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Serviceform } from "./pages/serviceform/serviceform";
import { Landingpage } from "./pages/landingpage/landingpage";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Serviceform, Landingpage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GarageService');
}
