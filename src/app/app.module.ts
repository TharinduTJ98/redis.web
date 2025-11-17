import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './Components/student-list/student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentServiceService } from './Services/student-service.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
