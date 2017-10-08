import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { SubMenuNavigateComponent } from './sub-menu-navigate/sub-menu-navigate.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileCountComponent } from './profile-count/profile-count.component';
import { ProfileAboutComponent } from './profile-about/profile-about.component';
import { WeatherWidgetComponent } from './wrapper/weather-widget/weather-widget.component';
import { CardComponent } from './card/card.component';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { FilterPipe } from './common/products/filter.pipe';
import { WrapperCardsComponent } from './wrapper/wrapper-cards/wrapper-cards.component';
import { WrapperDashboardComponent } from './wrapper/wrapper-dashboard/wrapper-dashboard.component';
import { WrapperFormComponent } from './wrapper/wrapper-form/wrapper-form.component';
import { WrapperLeftSidebarComponent } from './wrapper/wrapper-left-sidebar/wrapper-left-sidebar.component';
import { WrapperListComponent } from './wrapper/wrapper-list/wrapper-list.component';
import { WrapperTableComponent } from './wrapper/wrapper-table/wrapper-table.component';

const appRoutes: Routes = [
  { path: '', component: WrapperListComponent },
  { path: 'weather-widget', component: WeatherWidgetComponent },
  { path: 'dashboard', component: WrapperDashboardComponent },
  { path: 'cards', component: WrapperCardsComponent },
  { path: 'table', component: WrapperTableComponent },
  { path: 'forms', component: WrapperFormComponent },
  { path: 'left-side-bar', component: WrapperLeftSidebarComponent },
  { path: '**', component: WrapperListComponent }
];

@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent,
    FooterComponent,
    SubMenuComponent,
    SubMenuNavigateComponent,
    ProfileComponent,
    ProfileCountComponent,
    ProfileAboutComponent,
    WeatherWidgetComponent,
    CardComponent,
    TooltipDirective,
    FilterPipe,

    WrapperComponent,
    WrapperCardsComponent,
    WrapperDashboardComponent,
    WrapperFormComponent,
    WrapperLeftSidebarComponent,
    WrapperListComponent,
    WrapperTableComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    SidebarComponent,
    MenuComponent,
    FooterComponent,
    WrapperListComponent,
    WrapperFormComponent,
    WrapperCardsComponent,
    WrapperDashboardComponent,
    WrapperLeftSidebarComponent,
    WrapperTableComponent,
    SubMenuComponent,
    SubMenuNavigateComponent,
    ProfileAboutComponent,
    WeatherWidgetComponent,
    CardComponent,
    CommonModule,
    TooltipDirective,
    FilterPipe,

    WrapperComponent,
    WrapperCardsComponent,
    WrapperDashboardComponent,
    WrapperFormComponent,
    WrapperLeftSidebarComponent,
    WrapperListComponent,
    WrapperTableComponent,
  ],
})

export class AppRouters {}
