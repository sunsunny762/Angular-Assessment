import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllAuthorComponent } from './author/all-author/all-author.component';
import { HttpClientModule } from '@angular/common/http';
import { IntersectionListenerDirective } from './directive/intersection-listener.directive';
import { AuthorDetailComponent } from './author/author-detail/author-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AllAuthorComponent,
    IntersectionListenerDirective,
    AuthorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
