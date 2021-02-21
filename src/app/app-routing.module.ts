import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlbumComponent } from './components/home/song/album/album.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'album/:albumId', component: AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AlbumComponent
]
