import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BooksComponent } from './components/books/books.component';
import { FormsModule } from '@angular/forms'
import { UsersService } from './services/users.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SessionService } from './services/session.service';
import { GuardsComponent } from './guards/guards.component'
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    NavBarComponent,
    BooksComponent,
    DashboardComponent,
    GuardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService,SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
