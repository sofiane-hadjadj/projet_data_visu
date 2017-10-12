import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdCheckboxModule, MdSelectModule, MdSidenavModule, MdInputModule, MdMenuModule, MdCardModule, MdToolbarModule, MdIconModule, MdTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FormularyComponent } from './formulary/formulary.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { MainComponent } from './main/main.component';
import { ContainerComponent } from './container/container.component';
import { SelectFormExampleComponent } from './select-form-example/select-form-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularyComponent,
    TopbarComponent,
    FooterComponent,
    NavLeftComponent,
    MainComponent,
    ContainerComponent,
    SelectFormExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdSelectModule,
    MdSidenavModule,
    MdButtonModule, 
    MdCheckboxModule, 
    MdInputModule, 
    MdMenuModule, 
    MdCardModule, 
    MdToolbarModule, 
    MdIconModule, 
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
