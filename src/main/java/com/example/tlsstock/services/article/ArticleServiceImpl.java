package com.example.tlsstock.services.article;

import com.example.tlsstock.dtos.ArticleDto;
import com.example.tlsstock.entities.Article;
import com.example.tlsstock.entities.Category;
import com.example.tlsstock.repositories.ArticleRepository;
import com.example.tlsstock.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class ArticleServiceImpl implements ArticleService{

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ArticleRepository articleRepository;

    @Override
    public ArticleDto saveArticle(ArticleDto articleDto) throws IOException {
        if(articleDto != null){
            Article article = new Article();
            article.setCode(articleDto.getCode());
            article.setName(articleDto.getName());
            article.setDescription(articleDto.getDescription());
            article.setQuantity(articleDto.getQuantity());
            article.setImage(articleDto.getImage().getBytes());

            Category category = categoryRepository.findById(articleDto.getCategoryId()).orElse(null);
            article.setCategory(category);

            return articleRepository.save(article).getDto();
        }
        return null;
    }
}
