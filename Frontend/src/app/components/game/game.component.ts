import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnagramService } from '../../services/anagram.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  anagram: string = '';
  userAnswer: string = '';
  resultMessage: string = '';
  resultClass: string = ''; 

  constructor(private anagramService: AnagramService) {}

  ngOnInit() {
    this.loadAnagram();
  }

  loadAnagram() {
    this.anagramService.getAnagram().subscribe((data) => {
      this.anagram = data.anagramme;
      this.resultMessage = '';
      this.userAnswer = '';
      this.resultClass = ''; 
    });
  }

  checkAnswer() {
    this.anagramService.validateAnswer(this.userAnswer).subscribe(
      (response) => {
        if (response.correct) {
          this.resultMessage = `Correct ! Le pays était : ${response.solution}`;
          this.resultClass = 'text-green-600'; // Couleur verte
        } else {
          this.resultMessage = 'Mauvaise réponse, essayez encore.';
          this.resultClass = 'text-red-600'; // Couleur rouge
        }

        console.log('Message affiché :', this.resultMessage);

        // Attendre 3 secondes avant de recharger
        setTimeout(() => {
          this.loadAnagram();
        }, 3000);
      },
      (error) => {
        console.error('Erreur lors de la requête :', error);
        this.resultMessage = 'Erreur de connexion avec le serveur.';
        this.resultClass = 'text-red-600';
      }
    );
  }
}
