import { SerieListaComponent } from './components/series/serie-lista/serie-lista.component';
import { SerieDetalheComponent } from './components/series/serie-detalhe/serie-detalhe.component';
import { CharacterListaComponent } from './components/characters/character-lista/character-lista.component';
import { CharacterDetalheComponent } from './components/characters/character-detalhe/character-detalhe.component';
import { ComicDetalheComponent } from './components/comics/comic-detalhe/comic-detalhe.component';
import { ComicListaComponent } from './components/comics/comic-lista/comic-lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { HomeComponent } from './components/home/home.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'character', redirectTo: "characters/lista" },
  { path:'characters', component: CharactersComponent,
    children:[
      {path:'detalhe/:id', component:CharacterDetalheComponent},
      {path:'detalhe', component:CharacterDetalheComponent},
      {path:'lista', component:CharacterListaComponent}
    ]
  },
  { path:'comic', redirectTo:"comics/lista" },
  { path:'comics', component:ComicsComponent,
    children:[
      {path:'detalhe/:id', component:ComicDetalheComponent},
      {path:'detalhe', component:ComicDetalheComponent},
      {path:'lista', component:ComicListaComponent}
    ]
  },
  { path:'serie', redirectTo:"series/lista"},
  { path:'series', component: SeriesComponent,
    children:[
      {path:'detalhe/:id', component:SerieDetalheComponent},
      {path:'detalhe', component:SerieDetalheComponent},
      {path:'lista', component:SerieListaComponent}
    ]
  },
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'**', redirectTo:'/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
