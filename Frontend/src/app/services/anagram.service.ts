import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnagramService {
  private apiUrl = 'http://localhost:3000/api'; // URL du backend

  constructor(private http: HttpClient) {}

  // Récupérer un anagramme aléatoire (GET)
  getAnagram(): Observable<any> {
    return this.http.get(`${this.apiUrl}/anagrammes`);
  }

  // Valider une réponse (POST)
  validateAnswer(solution: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/validate`, { solution });
  }
}
