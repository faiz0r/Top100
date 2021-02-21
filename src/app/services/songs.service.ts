import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(
    private http: HttpClient
  ) { }

  getSongs(): Observable<any> {
    const url = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";
    return this.http.get(url);
  }

  getAlbum() {
    let data = ''

    fetch('https://itunes.apple.com/us/rss/lookup?upc=720642462928&entity=song/json')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {

        data = myJson
        console.log(data)
      });
  }
}
