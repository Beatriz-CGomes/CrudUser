import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { environment } from '../environments/environment.development';
import { AngularFireModule } from '@angular/fire/compat';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CadastroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginator,
    MatSort
  ],
  providers: [
    /*
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({"projectId":"crud-usuarios-angular-dcd38","appId":"1:720597608663:web:280d54b6320f9edb562892","storageBucket":"crud-usuarios-angular-dcd38.firebasestorage.app","apiKey":"AIzaSyC7fEue7-sQyEs8MYumCwPgs8KF1RSXp1A","authDomain":"crud-usuarios-angular-dcd38.firebaseapp.com","messagingSenderId":"720597608663"})),
    provideFirestore(() => getFirestore()) */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
