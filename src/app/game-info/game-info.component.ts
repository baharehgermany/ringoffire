import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardAction = [
{title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2'},
{title: 'you', description: 'You decide who drinks'},
{title: 'Me', description: 'Congrats! Drink a shot!'},
{title: 'Category', description: 'Come up with a category (e. g. Colors). Each player must enumerate one item from the category.'},
{title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one.'},
{title: 'Chicks', description: 'All girls drink.'},
{title: 'Heaven', description: 'Put your hands up! The last player drinks!'},
{title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.'},
{title: 'Thumbmaster', description: ''},
{title: 'Men', description: 'All men drink'},
{title: 'Quizmaster', description: ''},
{title: 'Never have i ever...', description: 'Say something you never did. Everyone who did it has to drink'},
{title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule'},
 
];

title: string = '';
description: string = '';
@Input() card: string;


  constructor() { }

  ngOnInit(): void {
  }

  //void = gibt nur was aus, gibt nicht zurück
  //string mit + in number umwandeln
  //var + richtige index-zahl ageben lassen
  ngOnChanges(): void {
    if (this.card){//nur wenn karte vorhanden
      console.log('Current card is:', this.card);
      // console.log('Current number is:', this.card.split('_')[1]);
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;//1immer abziehen
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }

}
