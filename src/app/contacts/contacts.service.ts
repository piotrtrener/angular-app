import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private baseApiUrl = 'http://contactsapi.loc';

  constructor(private httpClient: HttpClient) { }

  // rxjs

  getContacts(): Observable<any> {

    return this.httpClient.get(`${this.baseApiUrl}/contacts`);

  }

}
