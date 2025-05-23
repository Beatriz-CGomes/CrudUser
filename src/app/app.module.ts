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
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalViewUsersComponent } from './pages/cadastro/modal-view-users/modal-view-users.component';
import { ModalFormUserComponent } from './pages/cadastro/modal-form-user/modal-form-user.component'
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CadastroComponent,
    ModalViewUsersComponent,
    ModalFormUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //ANGULAR MATERIAL
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
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
