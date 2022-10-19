import {Component, Input} from '@angular/core'
import {PopularTagType} from 'src/app/shared/types/popularTag.type'

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tagList.component.html',
  styles: [
    'div{background:#DCDBE1} div > ul.tag-list > li.colorChange.tag-pill.tag-outline{color:white; background-color:#7F858C} div.outer { padding:10px 10px 0px 10px}',
  ],
})
export class tagListComponent {
  @Input('tags') tagsProps: PopularTagType[]
  @Input('alternate') alternate: boolean = false
}
