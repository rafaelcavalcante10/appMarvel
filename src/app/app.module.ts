import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { NavBottomComponent } from './shared/nav-bottom/nav-bottom.component';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { SeriesComponent } from './components/series/series.component';
import { DateTimeFormatPipe } from './helpers/date-time-format.pipe';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DatePipe } from '@angular/common';
import { CharacterComponent } from './components/characters/character/character.component';
import { CharacterComicsComponent } from './components/characters/character/character-comics/character-comics.component';
import { CharacterSeriesComponent } from './components/characters/character/character-series/character-series.component';
import { SerieComponent } from './components/series/serie/serie.component';
import { TitleComponent } from './shared/title/title.component';
import { ComicListaComponent } from './components/comics/comic-lista/comic-lista.component';
import { ComicDetalheComponent } from './components/comics/comic-detalhe/comic-detalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavBottomComponent,
    HomeComponent,
    CharactersComponent,
    ComicsComponent,
    SeriesComponent,
    DateTimeFormatPipe,
    CharacterComponent,
    CharacterComicsComponent,
    CharacterSeriesComponent,
    SerieComponent,
    TitleComponent,
    ComicListaComponent,
    ComicDetalheComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    NgxSpinnerModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar:true
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
