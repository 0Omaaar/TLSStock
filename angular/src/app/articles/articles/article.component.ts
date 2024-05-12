import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/articles/article.service';
import { CategoryService } from 'src/app/services/category.service';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  articles: any[] = [];

  constructor(private articleService: ArticleService, 
    private router: Router
  ){}

  getArticles(){
    this.articles = [];
    this.articleService.getArticles().subscribe((res) => {
        res.forEach((element: {image: any, processedImg: string; byteImage: string; }) => {
          if(element.byteImage != null){
            element.processedImg = 'data:image/jpeg;base64,' + element.byteImage;
          }
          this.articles.push(element);
        });
    });
  }

  ngOnInit(){
    this.getArticles();
  }
  
}
