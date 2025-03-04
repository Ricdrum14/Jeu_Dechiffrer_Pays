import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './components/game/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GameComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
}
