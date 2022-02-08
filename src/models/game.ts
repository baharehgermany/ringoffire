//objekt anlegen ( leeres JSON objekt mit logik)
export class Game{
    // von andere dateien drauf zugreifen/ dateityp angeben (validiert?)
    
    public players: string[] = [];
    //ungespielte karten
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;//aktueller spieler 0 

    //function die immer am anfang ausgerufen wird
    constructor(){
        for (let i = 1; i < 14; i++){
            this.stack.push('spade_' + i);//werte hinzufügen
            this.stack.push('hearts_' + i);//werte hinzufügen
            this.stack.push('clubs_' + i);//werte hinzufügen
            this.stack.push('diamonds_' + i);//werte hinzufügen

            
        }

        shuffle(this.stack);
    }

}

//mix cards
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }