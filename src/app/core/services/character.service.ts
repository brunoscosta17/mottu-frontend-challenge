import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCharacterResponse, Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<ApiCharacterResponse> {
    return this.http.get<ApiCharacterResponse>(this.apiUrl);
  }

  searchCharacter(name: string): Observable<{ results: Character[] }> {
    return this.http.get<{ results: Character[] }>(`${this.apiUrl}?name=${name}`);
  }

}
