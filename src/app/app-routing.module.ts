import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { FriendsComponent } from './friends/friends.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HelpComponent } from './help/help.component';

export const routes: Routes = [
  {path: 'discover', component: DiscoverComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'help', component: HelpComponent},
  {path: '', redirectTo: '/discover', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
