import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'arq-mf-scroll-up-button',
  template: `
    <button class="arq-mf__button-styles" (click)="scrollUp()">
      Subir
</button>
  `,
  styles: [
    `.arq-mf__button-styles { 
      width:60px; 
      height:60px; 
      background-color: #212529;
      color:white;
      position:fixed;
      bottom: 2%;
      right: 4%;
      border-radius:50%;
      border: 3px solid #6c757d;
      transition: transform .4s ease-in-out;
     }
     .arq-mf__button-styles:hover { 
      transform:scale(0.8)
     }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ScrollUpButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
