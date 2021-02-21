import { Component, OnInit, Input } from '@angular/core';
import { Model } from './../../../model/Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  @Input() data!: Model;
  
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onSelect(albumId: any) {
    this.router.navigate(['/album', albumId]);
  }


}

