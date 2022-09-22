import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FeedComponent } from './components/feed.component';
import { FeedService } from './services/feed.service';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { reducers } from './store/reducers';

@NgModule ({
    imports:[
        CommonModule, 
        EffectsModule.forFeature([GetFeedEffect]),
        StoreModule.forFeature('feed',reducers),
        RouterModule
    ],
    declarations:[FeedComponent],
    providers:[FeedService],
    exports:[FeedComponent]
})

export class FeedModule {}