import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root',
})
export class PostagemService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(
      'https://beamoreli.herokuapp.com/postagens',
      this.token
    );
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(
      `https://beamoreli.herokuapp.com/postagens/${id}`,
      this.token
    );
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]>{
    return  this.http.get<Postagem[]>(`https://beamoreli.herokuapp.com/postagens/titulo/${titulo}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(
      'https://beamoreli.herokuapp.com/postagens',
      postagem,
      this.token
    );
  }
  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>(
      'https://beamoreli.herokuapp.com/postagens',
      postagem,
      this.token
    );
  }

  deletePostagem(id: number) {
    return this.http.delete(
      `https://beamoreli.herokuapp.com/postagens/${id}`,
      this.token
    );
  }

}
