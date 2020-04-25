import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerHomeComponent } from './container-home/container-home.component';
import { ReporteComponent } from './reporte/reporte.component';
import { EstadoComponent } from './estado/estado.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ReportesActivosComponent } from './reportes-activos/reportes-activos.component';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';
import { ReporteAdminComponent } from './reporte-admin/reporte-admin.component';
import { ReporteEnviadoComponent } from './reporte-enviado/reporte-enviado.component';
import { ReporteClienteEnviadoComponent } from './reporte-cliente-enviado/reporte-cliente-enviado.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerHomeComponent,
    ReporteComponent,
    EstadoComponent,
    AdminComponent,
    HeaderAdminComponent,
    ReportesActivosComponent,
    ListaReportesComponent,
    ReporteAdminComponent,
    ReporteEnviadoComponent,
    ReporteClienteEnviadoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
