import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NumberService {

  number1: number;

  items: any[] = [];
  constructor() { }
}
