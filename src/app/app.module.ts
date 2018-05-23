import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CropItemComponent } from './crop-item/crop-item.component';
import { CropfieldComponent } from './cropfield/cropfield.component';
import { ButtonComponent } from './button/button.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CropItemComponent,
    CropfieldComponent,
    ButtonComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
