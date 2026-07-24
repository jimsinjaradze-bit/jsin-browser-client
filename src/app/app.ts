import { Component, signal } from '@angular/core';

export interface Project {
  name: string;
  tagline: string;
  url: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly brand = 'jsin.io';

  // Add a new tool by dropping one object in here — the template renders the rest.
  protected readonly projects = signal<Project[]>([
    {
      name: 'Gabby',
      tagline: 'Send someone a file. That’s the whole thing.',
      url: 'https://gabby.jsin.io/',
    },
  ]);

  protected readonly paypalUrl = 'https://paypal.me/JimsherSinjaradze';
}
