import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderNoRibbonComponent } from './header-no-ribbon/header-no-ribbon.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClientModule, HttpClient} from '@angular/common/http'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { TranslateComponent } from './translate/translate.component';
import { AllReportsComponent } from './all-reports/all-reports-components/all-reports.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TranslateComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    HeaderAdminComponent,
    PageNotFoundComponent,
    HeaderNoRibbonComponent,
    AllReportsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
