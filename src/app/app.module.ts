import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { MediadataService } from './mediadata.service';

import { FilterPipe } from './filter.pipe';
import { KeysPipe } from './keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [MediadataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
