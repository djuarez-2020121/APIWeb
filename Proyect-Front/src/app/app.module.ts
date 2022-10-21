import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './Components/empresa/empresa.component';
import { ShowComponent } from './Components/show/show.component';
import { AddEditComponent } from './Components/add-edit/add-edit.component';

import { EmpresaServiceService } from './Services/empresa-service.service';
import { ProductosComponent } from './Components/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    ShowComponent,
    AddEditComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EmpresaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
