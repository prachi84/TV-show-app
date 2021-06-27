import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TVContainerComponent } from './tv-container/tv-container.component';
import {HttpClientModule} from '@angular/common/http';
import { TvshowService } from './tvshow.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TvSearchComponent } from './tv-search/tv-search.component';
import { DramaGenreComponent } from './drama-genre/drama-genre.component';
import {RemovesymbolsService} from './removesymbols.service';
import {specialPipe} from './removesymbols.service';
import {GenreService} from './genre.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ShowdetailNewpageComponent } from './showdetail-newpage/showdetail-newpage.component';

@NgModule({
  declarations: [
    AppComponent,
    TVContainerComponent,
    TvSearchComponent,
    DramaGenreComponent,
    specialPipe,
    ShowdetailNewpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [TvshowService,RemovesymbolsService,GenreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
