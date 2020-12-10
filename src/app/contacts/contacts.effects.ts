import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { Store } from '@ngrx/store'
import { map, catchError, mergeMap, withLatestFrom } from 'rxjs/operators'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { addActiveContact, fetchContacts, fetchContactsFailure, fetchContactsSuccess, removeActiveContact,
  toggleActiveContact } from '@grmContacts/contacts.actions'
import { ContactsService } from '@grmContacts/contacts.service'
import { Contact } from '@grmContacts/contacts.model'
import { activeContactsSelector, ContactsState } from '@grmContacts/contacts.state'

/**
 * The contacts effects
 */
@Injectable()
export class ContactsEffects {
  /**
   * Fetches the contacts
   */
  fetchContacts$ = createEffect((): any => this.actions$
    .pipe(
      ofType(fetchContacts),
      mergeMap((action) => this.contactsService.loadContacts()
        .pipe(
          map((contacts: Contact[]) => fetchContactsSuccess({contacts})),
          catchError(error => of(fetchContactsFailure({
            error,
            message: 'Unable to fetch contacts, please try again'
          })))
        )
      )
    )
  )

  /**
   * Toggles an active contact
   */
  toggleActiveContact$ = createEffect((): any => this.actions$
    .pipe(
      ofType(toggleActiveContact),
      withLatestFrom(this.store.select(activeContactsSelector)),
      map(([action, activeContacts]) => {
        const activeContact: Contact = activeContacts?.find((contactId: any) => action.contact.contactId === contactId)
        if (activeContact) {
          return removeActiveContact({contactId: action.contact.contactId})
        }

        return addActiveContact({contactId: action.contact.contactId})
      })
    )
  )

  constructor(
    private actions$: Actions,
    private store: Store<ContactsState>,
    private contactsService: ContactsService
  ) { }
}
