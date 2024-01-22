import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RightProjectComponent } from './components/right-project/right-project.component';
import { LeftProjectComponent } from './components/left-project/left-project.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProjectsComponent,
    FooterComponent,
    HeaderComponent,
    RightProjectComponent,
    LeftProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
