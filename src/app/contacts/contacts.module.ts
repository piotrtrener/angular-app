import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { SharedModule } from '../shared/shared.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsRoutingModule } from './contacts-routing.module';



@NgModule({
  declarations: [
    ContactsListComponent,
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactsRoutingModule
  ],
  exports: [
    ContactsListComponent
  ]
})
export class ContactsModule { }
