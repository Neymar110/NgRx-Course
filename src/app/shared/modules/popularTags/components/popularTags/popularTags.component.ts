import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { feedSelector } from '../../../feed/store/selectors';
import { GetFeedResponseInterface } from '../../../feed/types/getFeedResponse.interface';
import { getPopularTagsAction } from '../../store/actions/getPopularTags.action';
import { errorSelector, isLoadingSelector, popularTagsFeatureSelector, popularTagsSelector } from '../../store/selectors';

@Component({
  selector: 'mc-popularTags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss']
})
export class PopularTagsComponent implements OnInit{
  popularTags$:Observable<PopularTagType[] | null>
  isLoading$ : Observable<boolean>
  error$ : Observable<string | null>
  constructor(private store : Store<AppStateInterface>){}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  fetchData():void {
    this.store.dispatch(getPopularTagsAction())
  }

  initializeValues():void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }
}
