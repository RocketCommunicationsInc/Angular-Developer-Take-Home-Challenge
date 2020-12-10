import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { ContactsEffects } from '@grmContacts/contacts.effects'
import { ContactsService } from '@grmContacts/contacts.service'
import { contactsReducers } from '@grmContacts/contacts.reducer'
import { defaultContactsState } from '@grmContacts/contacts.state'
import { ContactsListComponent, ContactsListDisplayComponent } from '@grmContacts/components/contacts-list/contacts-list.component'
import { ContactsListHeaderComponent,
  ContactsListHeaderDisplayComponent } from '@grmContacts/components/contacts-list-header/contacts-list-header.component'
import { ContactsListItemComponent,
  ContactsListItemDisplayComponent } from '@grmContacts/components/contacts-list-item/contacts-list-item.component'
import { ContactSortPipe } from '@grmContacts/pipes/contact-sort.pipe'
import '@astrouxds/rux-status'
import '@astrouxds/rux-notification'
import '@astrouxds/rux-progress'
import '@astrouxds/rux-button'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('contacts', contactsReducers, {
      initialState: defaultContactsState
    }),
    EffectsModule.forFeature([
      ContactsEffects
    ]),
    FlexLayoutModule
  ],
  declarations: [
    ContactsListComponent,
    ContactsListDisplayComponent,
    ContactsListHeaderComponent,
    ContactsListHeaderDisplayComponent,
    ContactsListItemComponent,
    ContactsListItemDisplayComponent,
    ContactSortPipe
  ],
  providers: [
    ContactsService
  ],
  exports: [
    ContactsListComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ContactsModule { }
