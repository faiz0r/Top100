import { Component, OnInit } from '@angular/core';
import { Model } from './../../model/Model';
import { SongsService } from './../../services/songs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  albums!: Model[];
  searchText: string = '';

  constructor(
    private songsService: SongsService
  ) {}

  ngOnInit(): void {
    this.songsService.getSongs().subscribe((data) => {
      this.albums = data.feed.entry;
    });
  }

}
