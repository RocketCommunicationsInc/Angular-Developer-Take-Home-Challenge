import { Component, OnInit } from '@angular/core';

// import { CONTACTS } from '../mock-contacts' replacing this with the below ContactService
import { Contact } from '../../contact';
import { ContactService } from '../contact.service';
import { DebuggerService } from '../debugger.service';
import { RuxPushButton } from '@astrouxds/rux-push-button/rux-push-button.js';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];

  selectedContact: Contact;

  contactCount: number;
  executingCount: number;
  failureCount: number;
  contactStatus: string;

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
    // this.contactService;
  }

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
      this.contactStatus = this.contactStatus;
      this.contactCount = this.contacts.length;
      this.executingCount = this.contacts.filter(
        (contact) => contact.contactState === 'executing'
      ).length;
      this.failureCount = this.contacts.filter(
        (contact) => contact.contactState === 'failed'
      ).length;
    });
  }
}
