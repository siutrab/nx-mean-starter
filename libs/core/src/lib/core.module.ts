import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureAuthModule } from '@nx-mean-starter/feature/auth';
import { SharedModule } from '@nx-mean-starter/shared';
import { LayoutComponent, NavbarComponent, UserSidenavCardComponent } from './layout/components';
import { LayoutPageComponent } from './layout/pages';

@NgModule({
  imports: [CommonModule, SharedModule, FeatureAuthModule, RouterModule],
  declarations: [LayoutComponent, LayoutPageComponent, NavbarComponent, UserSidenavCardComponent],
  exports: [LayoutPageComponent],
})
export class CoreModule {}
