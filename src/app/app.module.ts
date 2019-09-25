import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material';

import { FirstcmpComponent } from './layout/firstcmp/firstcmp.component';
import { SecondcmpComponent } from './layout/secondcmp/secondcmp.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { FormsModule } from '@angular/forms';
import { AuthGuardGuard } from './auth-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    FirstcmpComponent,
    SecondcmpComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
     RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardGuard],
        children: [
          {
            path:'',
            redirectTo:'firstcmp',
            pathMatch:'prefix'
          },
          {
            path: 'secondcmp',
            component: SecondcmpComponent
          },
          {
            path: 'firstcmp',
            component: FirstcmpComponent
          },
          {
            path: 'mychart',
            loadChildren: () => import('./layout/mychart/mychart.module').then(mod => mod.MychartModule)
          },
          {
            path: 'd3-chart',
            loadChildren: () => import('./layout/d3-chart/d3-chart.module').then(mod => mod.D3ChartModule)
          }
        ]
      }
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
