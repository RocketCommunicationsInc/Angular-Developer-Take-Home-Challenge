import { ActionReducer, createReducer, on } from '@ngrx/store'
import { FetchStatus } from '@grmCommon/enums/status.enums'
import { addActiveContact, fetchContacts, fetchContactsFailure, fetchContactsSuccess, removeActiveContact,
  sortContacts } from '@grmContacts/contacts.actions'
import { ContactsState, defaultContactsState } from '@grmContacts/contacts.state'

/**
 * The contacts reducers
 */
export const contactsReducers: ActionReducer<ContactsState> = createReducer(
  defaultContactsState,
  on(fetchContacts, (state: ContactsState, { }) => ({
    ...state,
    fetchStatus: FetchStatus.fetching
  })),
  on(fetchContactsSuccess, (state: ContactsState, { contacts }) => ({
    ...state,
    contacts,
    fetchStatus: FetchStatus.fetchSuccess
  })),
  on(fetchContactsFailure, (state, { error, message }) => ({
    ...state,
    error,
    errorMessage: message,
    fetchStatus: FetchStatus.fetchFailed
  })),
  on(addActiveContact, (state, { contactId }) => ({
    ...state,
    activeContacts: state.activeContacts.concat(contactId)
  })),
  on(removeActiveContact, (state, { contactId }) => ({
    ...state,
    activeContacts: state.activeContacts.filter(_contactId => _contactId !== contactId)
  })),
  on(sortContacts, (state, { column }) => ({
    ...state,
    sortColumn: column,
    sortDirection: (state.sortDirection === 'desc') ? 'asc' : 'desc'
  }))
)
