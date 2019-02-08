import { Component, Input, OnInit } from '@angular/core';
import { User } from '@nx-mean-starter/models';

@Component({
  selector: 'app-user-sidenav-card',
  templateUrl: './user-sidenav-card.component.html',
  styleUrls: ['./user-sidenav-card.component.scss'],
})
export class UserSidenavCardComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit() {}
}
