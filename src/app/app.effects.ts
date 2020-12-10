import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { switchMap } from 'rxjs/operators'
import { setTitle } from '@grm/app.actions'

@Injectable()
export class AppEffects {
  setTitle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setTitle),
      switchMap(title => [
        this.titleService.setTitle(title.title.join(' - '))
      ])
    ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private titleService: Title
  ) { }
}
