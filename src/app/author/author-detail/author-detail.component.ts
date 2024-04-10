import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../author.service';
import { Author } from '../author';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  authorDetail:undefined | Author; 
  constructor(private activeRoute:ActivatedRoute, private authorService:AuthorService) {}

  ngOnInit(): void {
    let authorId = this.activeRoute.snapshot.paramMap.get('authorId');
    authorId && this.authorService.getDetail(authorId).subscribe((data) =>{
      console.log(data);
      this.authorDetail = data;
    });
  }


}
