import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
//var, objekte
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game: any = Game;


  constructor(public dialog: MatDialog) { 

  }

  ngOnInit(): void {
    this.newGame();
  }

  // variable kriegt neues objekt = leeres JSON objekt
  newGame(){
    this.game = new Game;
 }

  //eine animation abspielen beim clicken
  takeCard() {
    if (!this.pickCardAnimation) {//! nur wenn false (umgekehrt)
      this.currentCard = this.game.stack.pop();//auf array zugreifen und pop() gibt uns den letzten wert zurück bzw. gleichz.entfernt
      this.pickCardAnimation = true;
      console.log('New card: ' + this.currentCard);
      console.log('Game is', this.game);

      this.game.currentPlayer++;//wie =  this.game.currentPlayer +1
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;//nur nach der lange der spieler3 (rest operator)
      //animi wiederholen
      setTimeout(()=>{
      this.game.playedCards.push(this.currentCard);//erst hier letzte karte einf.

        this.pickCardAnimation = false;
      }, 1000)
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent)
    

    dialogRef.afterClosed().subscribe((name:string) => {
     
      if (name && name.length > 0){//&& wenn vr:name stimmt/ ab 1 länge spieler hinzufügen
        this.game.players.push(name);//name fügen wir unseren array player zu
      }

    });
  }





}
