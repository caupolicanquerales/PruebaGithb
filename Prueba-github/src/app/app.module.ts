import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpaceAnimationComponent } from './spaceAnimation/space-animation/space-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceAnimationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
