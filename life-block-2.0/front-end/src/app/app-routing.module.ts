import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { DeathBenefitComponent } from './death-benefit/death-benefit.component';
import { LoginComponent } from './login/login.component';
import { PolicyComponent } from './policy/policy.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'report', component: ReportComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'beneficiary', component: BeneficiaryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'death-benefit', component: DeathBenefitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
