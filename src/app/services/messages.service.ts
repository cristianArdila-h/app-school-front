import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  getMessages() {
    return this.http.get(`${ base_url }/messages/getMessagesByReceiverId`, {headers: {'x-token': this.token }})
  }

  getSentMessages( page ) {
    return this.http.get(`${ base_url }/messages/getMessagesBySenderId/${ page }`, {headers: {'x-token': this.token }})
  }

  get token(): string {
    return sessionStorage.getItem('token') || '';
  }
}
