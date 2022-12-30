import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaintenancePageComponent } from './maintenance/maintenance-page/maintenance-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MaintenancePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
