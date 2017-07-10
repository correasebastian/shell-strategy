import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {UpgradeModule } from '@angular/upgrade/static'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Feature1Sub1Component } from './feature1-sub1/feature1-sub1.component';
import { Feature1Sub2Component } from './feature1-sub2/feature1-sub2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Feature1Sub1Component,
    Feature1Sub2Component
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'feature1/sub1', component: Feature1Sub1Component },
      { path: 'feature1/sub2', component: Feature1Sub2Component }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
