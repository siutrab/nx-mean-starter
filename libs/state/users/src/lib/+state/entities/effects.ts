import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { User } from '@nx-mean-starter/models';
import { AuthState } from '@nx-mean-starter/state/auth';
import { ofAction } from 'ngrx-actions/dist';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { UsersService } from '../../service/users.service';
import { Load, LoadAll, LoadAllSuccess, LoadError, LoadSuccess, Select } from './actions';
import { EntitiesState } from './reducer';
import { getEntities } from './selectors';

@Injectable()
export class EntitiesEffects {
  entities$ = this.store.select(getEntities);

  @Effect()
  selected$ = this.actions$.pipe(
    ofAction(Select),
    withLatestFrom(this.entities$),
    filter(([action, entities]) => !entities[action.id]),
    map(([action, entities]) => new Load(action.id)),
  );

  @Effect()
  authenticated$ = this.actions$.pipe(
    ofAction(AuthState.AuthIn),
    switchMap(() => this.service.getMe()),
    map((user: User) => new LoadSuccess(user)),
  );

  @Effect()
  load$ = this.actions$.pipe(
    ofAction(Load),
    switchMap(action =>
      this.service.getOne(action.id).pipe(
        map(user => new LoadSuccess(user)),
        catchError(err => of(new LoadError(err))),
      ),
    ),
  );

  @Effect()
  loadAll$ = this.actions$.pipe(
    ofAction(LoadAll),
    switchMap(() =>
      this.service.getAll().pipe(
        map(user => new LoadAllSuccess(user)),
        catchError(err => of(new LoadError(err))),
      ),
    ),
  );

  constructor(
    private store: Store<EntitiesState>,
    private actions$: Actions,
    private service: UsersService,
  ) {}
}
