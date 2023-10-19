import { Component, Input } from '@angular/core';

interface CardDetails{
title:string,
theme:string,
value:string,
icon:string,
progress?: number
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() cardData: CardDetails | undefined;
}
