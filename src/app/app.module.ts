import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TVContainerComponent } from './tv-container/tv-container.component';
import {HttpClientModule} from '@angular/common/http';
import { TvshowService } from './tvshow.service';

@NgModule({
  declarations: [
    AppComponent,
    TVContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TvshowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
