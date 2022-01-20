import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { HomeComponent } from './components/home/home.component';
import { SeriesComponent } from './components/series/series.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'characters', component: CharactersComponent },
  { path:'comics', component: ComicsComponent },
  { path:'series', component: SeriesComponent },
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'**', redirectTo:'/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
