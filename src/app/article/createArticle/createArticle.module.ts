import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ArticleFormModule } from "src/app/shared/modules/articleForm/articleForm.module";
import { CreateArticleComponent } from "./components/createArticle.component";

const routes = [
    {
        path:'articles/new',
        component:CreateArticleComponent
    }
]

@NgModule({
    imports:[CommonModule, RouterModule.forChild(routes), ArticleFormModule],
    declarations:[CreateArticleComponent]
})

export class CreateArticleModule{}