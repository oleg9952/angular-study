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

  posts: Array<Post> = [
    {
      id: 1,
      title: 'Post one for test',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus atque sunt dolorum veritatis saepe animi nam excepturi accusamus maiores quaerat mollitia a fugiat, doloribus ab earum aliquid quam laudantium dolores officia sit! Soluta autem laboriosam quisquam ducimus est vero, corporis adipisci non voluptatum. Neque eos et tempora unde excepturi quam voluptatem mollitia iusto ipsam repudiandae cupiditate architecto tempore non expedita',
      color: 'green'
    },
    {
      id: 2,
      title: 'Post two for test',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus atque sunt dolorum veritatis saepe animi nam excepturi accusamus maiores quaerat mollitia a fugiat, doloribus ab earum aliquid quam laudantium dolores officia sit! Soluta autem laboriosam quisquam ducimus est vero, corporis adipisci non voluptatum. Neque eos et tempora unde excepturi quam voluptatem mollitia iusto ipsam repudiandae cupiditate architecto tempore non expedita',
      color: 'black'
    }
  ];

  constructor() { }

  addPost(post: Post): void {
    this.posts.push(post)
  }
}
