import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Material design.
import { MdCardModule, MdToolbarModule, MdButtonModule, MdIconModule, MdIconRegistry } from '@angular/material';

import { AppComponent } from './app.component';
import { CardComponent } from './features/card/card.component';
import { MyService } from './services/my-service.service';
import { StripHtmlTagsPipe } from './pipes/strip-html-tags.pipe';
import { SpinnerComponent } from './features/layout/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StripHtmlTagsPipe,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule
  ],
  providers: [MyService, MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
