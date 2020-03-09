import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NumberService } from '../services/number.service';

@Component({
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.scss']
})
export class Lazy1Component implements OnInit {

  id: string;
  constructor(private route: ActivatedRoute,
              public numberService: NumberService) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
