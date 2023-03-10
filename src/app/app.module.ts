import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaintenancePageComponent } from './maintenance/maintenance-page/maintenance-page.component';
import { HeaderComponent } from './container/header/header.component';
import { HeroSectionComponent } from './content/hero-section/hero-section.component';
import { AboutUsComponent } from './content/about-us/about-us.component';
import { CelebrationComponent } from './content/celebration/celebration.component';
import { ActivitiesComponent } from './content/activities/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    MaintenancePageComponent,
    HeaderComponent,
    HeroSectionComponent,
    AboutUsComponent,
    CelebrationComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
