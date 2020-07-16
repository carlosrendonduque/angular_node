import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {}

  getAllPosts(){
    return this.http.get('/posts/').pipe(map((posts) => {
      return posts;
    }));
  }
}
