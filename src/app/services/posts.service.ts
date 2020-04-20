import { Injectable } from '@angular/core';

export interface Post {
  id?: number;
  title: string;
  text: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Array<Post> = [];

  constructor() { }

  addPost(post: Post): void {
    this.posts.push(post)
  }
}
