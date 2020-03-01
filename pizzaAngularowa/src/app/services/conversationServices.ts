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
  private newMessageUrl = 'http://localhost:8080/addMessage/';

  getChatMessages(id: string): Observable<Array<string>> {
    const url = this.getChatMessagesUrl + id;
    return this.httpClient.get<Array<string>>(url)
      .pipe(
      );
  }
  getNewConversationId(): Observable<string> {
    const url = this.newConversationId;
    return this.httpClient.get<string>(url)
      .pipe(
      );
  }
  addNewMessage(message, conversationId, sentByDoctor): Observable<number> {
    const url = this.newMessageUrl + message + '&' + conversationId + '&' + sentByDoctor;
    return this.httpClient.get<number>(url)
      .pipe(
      );
  }
}
