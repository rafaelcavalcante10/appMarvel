import { ComicDetalheComponent } from './components/comics/comic-detalhe/comic-detalhe.component';
import { ComicListaComponent } from './components/comics/comic-lista/comic-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './components/characters/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { HomeComponent } from './components/home/home.component';
import { SerieComponent } from './components/series/serie/serie.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'characters', component: CharactersComponent },
  { path:'character', component: CharacterComponent },
  { path:'comic', redirectTo:"comics/lista" },
  { path:'comics', component:ComicsComponent,
    children:[
      {path:'detalhe/:id', component:ComicDetalheComponent},
      {path:'detalhe', component:ComicDetalheComponent},
      {path:'lista', component:ComicListaComponent}
    ]
  },
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
