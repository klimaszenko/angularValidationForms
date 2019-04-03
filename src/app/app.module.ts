import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';

const appRoutes: Routes = [
  { path: '', component: MdfComponent },
  { path: 'mdf', component: MdfComponent },
  { path: 'tdf', component: TdfComponent },
  { path: '**', component: MdfComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    MdfComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: true }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
