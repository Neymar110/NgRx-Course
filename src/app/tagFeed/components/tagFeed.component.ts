import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:"mc-tag-feed",
    templateUrl:"./tagFeed.component.html",
    styleUrls:["./tagFeed.component.scss"]
})

export class TagFeedComponent implements OnInit{
    constructor(private route: ActivatedRoute){}
    tagName : string
    apiUrl : string;
    ngOnInit(): void {
        this.tagName = this.route.snapshot.paramMap.get('slug')
        console.log("tagName",this.tagName);
        this.apiUrl = `/articles?tag=${this.tagName}`
    }
}