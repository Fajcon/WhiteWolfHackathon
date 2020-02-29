import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ConversationServices {
  constructor(private httpClient: HttpClient) {
  }

  private getConversationIdUrl = 'http://localhost:8080/getConversationId/';

  getConversationId(doctorId: string): Observable<string> {
    const url = this.getConversationIdUrl + doctorId;
    return this.httpClient.get<string>(url)
      .pipe(
      );
  }
}
