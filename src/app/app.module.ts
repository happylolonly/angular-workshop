import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AnotherComponent } from './another/another.component';
import { New2Component } from './new2/new2.component';
import { DoorService } from './door.service';
import { EngineService } from './engine.service';
import { WheelService } from './wheel.service';
import { CarService } from './car.service';
import { ChildComponent } from './child/child.component';
import { OnlyaPipe } from './onlya.pipe';
import { NgModel } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent,
    New2Component,
    ChildComponent,
    OnlyaPipe,
    NgModel,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DoorService,
    EngineService,
    WheelService,
    CarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
