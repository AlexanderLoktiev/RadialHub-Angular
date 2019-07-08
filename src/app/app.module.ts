import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { DiscoverComponent } from './discover/discover.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FriendsComponent } from './friends/friends.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DiscoverComponent,
    HeaderComponent,
    FilterComponent,
    SearchComponent,
    CategoryFilterComponent,
    NavigationComponent,
    FriendsComponent,
    NotificationsComponent,
    MessagesComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
