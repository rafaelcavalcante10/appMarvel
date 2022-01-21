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
import { TitleComponent } from './shared/title/title.component';
import { ComicListaComponent } from './components/comics/comic-lista/comic-lista.component';
import { ComicDetalheComponent } from './components/comics/comic-detalhe/comic-detalhe.component';
import { CharacterListaComponent } from './components/characters/character-lista/character-lista.component';
import { CharacterDetalheComponent } from './components/characters/character-detalhe/character-detalhe.component';
import { SerieListaComponent } from './components/series/serie-lista/serie-lista.component';
import { SerieDetalheComponent } from './components/series/serie-detalhe/serie-detalhe.component';

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
    TitleComponent,
    ComicListaComponent,
    ComicDetalheComponent,
    CharacterListaComponent,
    CharacterDetalheComponent,
    SerieListaComponent,
    SerieDetalheComponent
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
