import { Component, OnInit, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { ItemsService } from '../services/item.service';
import { User } from 'src/app/models/item.model';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

const STATE_KEY_ITEMS = makeStateKey('items');

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  users: User[] = [];
  constructor(private itemsService: ItemsService,
              private state: TransferState,
              @Inject(PLATFORM_ID) private platformId: object,
              @Inject(APP_ID) private appId: string) { }

  async ngOnInit() {
    await this.getItems();
  }

  async getItems() {
    this.users = this.state.get(STATE_KEY_ITEMS, [] as User[]);


    this.users = await this.itemsService.getItems();
    const platform = isPlatformBrowser(this.platformId) ?
    'in the browser' : 'on the server';
    console.log(`getUsers : Running ${platform} with appId=${this.appId}`);
    this.state.set(STATE_KEY_ITEMS, this.users as User[]);

    console.log(this.users);

  }

}
