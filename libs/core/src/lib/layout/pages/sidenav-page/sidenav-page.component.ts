import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '@nx-mean-starter/models';
import { RootState } from '@nx-mean-starter/state/root';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav-page',
  templateUrl: './sidenav-page.component.html',
  styleUrls: ['./sidenav-page.component.scss'],
})
export class SidenavPageComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<RootState.State>) {}

  ngOnInit() {
    this.user$ = this.store.select(RootState.getAuthenticatedUser);
  }
}
