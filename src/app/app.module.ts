import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { ScrollUpButtonComponent } from './scroll-up-button/scroll-up-button.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    ScrollUpButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [ScrollUpButtonComponent]
})
export class AppModule implements DoBootstrap {
  constructor(
    private injector: Injector
  ) {
    const imagenEspacio = createCustomElement(ScrollUpButtonComponent, { injector });
    customElements.define('arq-mf-scroll-up-button', imagenEspacio);
  }
  ngDoBootstrap() { }
}
