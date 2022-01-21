import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/characters/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicComponent } from './components/comics/comic/comic.component';
import { ComicsComponent } from './components/comics/comics.component';
import { HomeComponent } from './components/home/home.component';
import { SerieComponent } from './components/series/serie/serie.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'characters', component: CharactersComponent },
  { path:'character', component: CharacterComponent },
  { path:'comics', component: ComicsComponent },
  { path:'comic', component: ComicComponent},
  { path:'series', component: SeriesComponent },
  { path:'serie', component: SerieComponent},
   { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'**', redirectTo:'/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
