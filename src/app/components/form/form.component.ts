import { Component, OnInit } from '@angular/core';
import { PostsService, Post } from 'src/app/services/posts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formState: boolean = false;

  title: string = '';
  text: string = '';
  color: string = null;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  toggleForm(e: Event): void {
    if (e.target === e.currentTarget) {
      this.formState = !this.formState;
      this.title = '';
      this.text = '';
      this.color = null;
    };
  }

  handleNewPost(title: string, text: string, color: string): void {
    if (!title || !text || !color) {
      alert('Forgot to provide all data!')
      return;
    }
    
    this.postsService.addPost(<Post>{
      id: this.postsService.posts.length ? this.postsService.posts[this.postsService.posts.length - 1].id + 1 : 1,
      title,
      text,
      color
    })

    this.title = '';
    this.text = '';
    this.color = null;
    this.formState = false;
  }

  handleColor(e: Event): void {
    this.color = (<HTMLElement>e.currentTarget).dataset.color;
  }

}
