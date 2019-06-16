import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

//https://angular-maps.com/guides/getting-started/
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      //https://churchthemes.com/page-didnt-load-google-maps-correctly/#RefererNotAllowedMapError
      apiKey: 'AIzaSyCIRVsqTvtQmTirUQ0_8UOxqIEdcJ4wiJs'
    })
  ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
