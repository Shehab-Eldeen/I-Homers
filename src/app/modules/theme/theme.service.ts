import { Injectable } from '@angular/core';
import { light, dark, Theme } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private activeTheme: Theme = light;
  private availableThemes: Theme[] = [light, dark];

  constructor() { }

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.activeTheme;
  }

  isDarkTheme(): boolean {
    return this.activeTheme.name === dark.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    this.activeTheme = theme;
    Object.keys(this.activeTheme.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.activeTheme.properties[property]
      );
    });
  }

}
