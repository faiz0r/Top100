import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../../../services/songs.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(
    private songService: SongsService
  ) { }

  ngOnInit(): void {
    this.songService.getAlbum();
  }

}
