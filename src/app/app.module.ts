import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { NavComponent } from './section/nav/nav.component';
import { ArticleComponent } from './section/article/article.component';
import { FooterComponent } from './footer/footer.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ArticleInnerComponent } from './section/article/article-inner/article-inner.component';
import { NavInnerComponent } from './section/nav/nav-inner/nav-inner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    NavComponent,
    ArticleComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent,
    ArticleInnerComponent,
    NavInnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
