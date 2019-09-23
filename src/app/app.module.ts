import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { FiltradoCentrosComponent } from './filtrado-centros/filtrado-centros.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent,
    SolicitudesComponent,
    FiltradoCentrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
