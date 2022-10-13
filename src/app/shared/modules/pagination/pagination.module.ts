import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { UtilsService } from '../../services/utils.service';
import { PaginationComponent } from './components/pagination.component';

@NgModule({
    imports:[RouterModule, CommonModule],
    declarations:[PaginationComponent],
    exports:[PaginationComponent],
    providers:[UtilsService]
})

export class PaginationModule {}