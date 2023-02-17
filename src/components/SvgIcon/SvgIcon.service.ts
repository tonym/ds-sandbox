import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SvgIconService {
  content: { [k: string]: Observable<string> } = {};

  constructor(private httpClient: HttpClient) {}

  public getIcon(iconUrl: string): Observable<string> {
    this.content[iconUrl] = this.content[iconUrl]
      ? this.content[iconUrl]
      : this.httpClient.get(iconUrl, { responseType: 'text' }).pipe(shareReplay());
    return this.content[iconUrl];
  }
}
