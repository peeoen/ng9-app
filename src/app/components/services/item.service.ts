import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/item.model';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  constructor(private httpClient: HttpClient) { }

  async getItems() {
    const res = await this.httpClient.get('https://jsonplaceholder.typicode.com/users').toPromise();
    return res as User[];
  }
}
