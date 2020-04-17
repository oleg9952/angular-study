import { Component, OnInit } from '@angular/core';
import { PostsService, Post } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts: Array<Post> = null;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.posts;
  }

}
