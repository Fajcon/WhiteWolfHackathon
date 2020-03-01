import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ConversationServices {
  constructor(private httpClient: HttpClient) {
  }

  private getChatMessagesUrl = 'http://localhost:8080/chatMessages/';
  private newConversationId = 'http://localhost:8080/chat/new';

  getChatMessages(id: string): Observable<string> {
    const url = this.getChatMessagesUrl + id;
    return this.httpClient.get<string>(url)
      .pipe(
      );
  }
  getNewConversationId(): Observable<string> {
    const url = this.newConversationId;
    return this.httpClient.get<string>(url)
      .pipe(
      );
  }
}
