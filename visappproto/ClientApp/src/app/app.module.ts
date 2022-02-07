import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Wijmo Modules
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';

import { AccordionModule } from 'ngx-bootstrap/accordion';

// Root
import { AppComponent } from './app.component';
// UI
import { NavMenuComponent } from './ui/nav-menu/nav-menu.component';
// Components
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { MainFrameComponent } from './components/main-frame/main-frame.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { SimpleDataAccessComponent } from './components/simple-data-access/simple-data-access.component';
import { OrmDataAccessComponent } from './components/orm-data-access/orm-data-access.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { SakilaComponent } from './components/sakila/sakila.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    MainFrameComponent,
    PlaygroundComponent,
    SimpleDataAccessComponent,
    OrmDataAccessComponent,
    EmployeesComponent,
    SakilaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    WjInputModule,
    WjGridModule,
    AccordionModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'main', component: MainFrameComponent },
      { path: 'playground', component: PlaygroundComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'simple-data', component: SimpleDataAccessComponent },
      { path: 'orm-data', component: OrmDataAccessComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'sakila', component: SakilaComponent },
    ])
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
