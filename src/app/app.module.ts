import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { CidadeEstadoComponentComponent, CidadeEstadoComponentModule } from './shared/components/cidade-estado-component/cidade-estado-component.component';
import { CidadeEstadoPageComponent } from './pages/cidade-estado-page/cidade-estado-page.component';
import { CidadeEstadoService } from './shared/services/cidade-estado.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CidadeEstadoPageComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    CidadeEstadoComponentModule,
    HttpClientModule
  ],
  providers: [AuthService, ScreenService, AppInfoService, CidadeEstadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
