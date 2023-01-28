import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  listPost!: Post[];
  comment: Post = new Post;

  constructor(private postSrv: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts() {
    this.postSrv.getPosts().subscribe((data: Post[]) => {
      this.listPost = data;
    });
  }

  postComment() {
    this.postSrv.postMessage(this.comment).subscribe((data: Post) => {
      this.comment = new Post;
    });
  }
}
