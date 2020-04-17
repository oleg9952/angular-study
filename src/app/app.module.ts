import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { PostComponent } from './components/post/post.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PostComponent,
    PostPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
