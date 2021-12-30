import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { PhonelistComponentComponent } from './personlist-component/phonelist-component.component';
import { CommonModule } from '@angular/common';
import { PhoneService } from './servicos/phone-services';
import { PhoneBaseService } from './servicos/phone-base-service';
import { TesteComponent } from './teste/teste.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhonelistComponentComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [{provide:PhoneBaseService, useClass:PhoneService}],
  bootstrap: [PhonelistComponentComponent]
})
export class AppModule { }
