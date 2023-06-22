import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './login/login.component';
import { PolicyComponent } from './policy/policy.component';
import { ReportComponent } from './report/report.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AdminComponent } from './admin/admin.component';
import { SettingsComponent } from './settings/settings.component';
import { BeneficiaryInfoComponent } from './beneficiary-info/beneficiary-info.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { MatDividerModule } from '@angular/material/divider';
import { ProfileComponent } from './profile/profile.component';
import { HeaderTitleService } from './services/header-title.service';
import { PolicyModalComponent } from './policy-modal/policy-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormService } from './services/form-services';
import { RouterModule } from '@angular/router';
import { DeathBenefitComponent } from './death-benefit/death-benefit.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { VoteComponent } from './vote/vote.component';

export function playerFactory(){
  return player
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PolicyComponent,
    ReportComponent,
    HeaderComponent,
    AdminComponent,
    SettingsComponent,
    BeneficiaryInfoComponent,
    BeneficiaryComponent,
    ProfileComponent,
    PolicyModalComponent,
    DeathBenefitComponent,
    VoteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    FormsModule,
    RouterModule,
    LottieModule.forRoot({player:playerFactory}),
  ],
  providers: [HeaderTitleService,FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
