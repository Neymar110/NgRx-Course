import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PopularTagsService } from 'src/app/shared/modules/popularTags/services/popularTags.service';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';

import {
    getPopularTagsAction,
    getPopularTagsFailure,
    getPopularTagsSuccessAction,
} from '../actions/getPopularTags.action';

@Injectable()
export class GetPopularTagsEffect {
    getPopularTags$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getPopularTagsAction),
            switchMap(({}) => {
                return this.popularTagsService.getPopularTags().pipe(
                    map((popularTags: PopularTagType[]) => {
                        return getPopularTagsSuccessAction({popularTags})
                    }),

                    catchError(() => {
                        return of(getPopularTagsFailure())
                    })
                )
            })
        )
    )

    
  constructor(
    private actions$: Actions,
    private popularTagsService : PopularTagsService
    ){}
}