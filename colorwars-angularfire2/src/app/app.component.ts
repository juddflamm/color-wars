import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  scoreWhite = 0;
  scoreYellow = 0;

  squares: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.squares = af.database.list("/");
    this.squares.subscribe(updatedSquares=>{
      var newScoreWhite = 0;
      var newScoreYellow = 0;
      updatedSquares.forEach(updatedSquare => {
        if (updatedSquare.color == "White") {
          newScoreWhite++;
        } else if (updatedSquare.color == "Yellow") {
          newScoreYellow++;
        }
      });
      this.scoreWhite = newScoreWhite;
      this.scoreYellow = newScoreYellow;
    })

  }

  squareClicked(square) {
    var newVal = (square.color == "White")?"Yellow":"White";
    this.squares.update(square.$key, {'color': newVal});
  }

}
