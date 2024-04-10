import { Component, HostListener, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Author } from '../author';

@Component({
  selector: 'app-all-author',
  templateUrl: './all-author.component.html',
  styleUrls: ['./all-author.component.css']
})
export class AllAuthorComponent implements OnInit{
  allAuthor:Author[] = []; 
  page = 1;
  perPage = 9;
  isLoading:boolean=false;
  
  constructor(private authorService:AuthorService) {}
  
  ngOnInit(): void {
    this.getAPI();
  }
  
  getAPI(){
    console.log(this.page);
    if (this.isLoading) {
      return;
    }
    this.isLoading=true;
    this.authorService.get(this.page, this.perPage).subscribe((data) =>{
      this.allAuthor = [...this.allAuthor, ...data];
      this.page++;
      this.isLoading=false;
    });
  }

}
