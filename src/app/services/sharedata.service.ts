import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  sharedPost: string = "";
  sharedDate: Date = new Date();
  private posts: { post: string, date: Date }[] = []; // Tableau pour stocker les postes


  constructor() { }

  addPost(postText: string, postDate: Date) {
    this.posts.push({ post: postText, date: postDate }); // Ajouter un nouveau poste au tableau
  }
  getPosts(): { post: string, date: Date }[] {
    return this.posts; // Récupérer tous les postes
  }
  setPostAndDate(post: string, date: Date) {
    this.sharedPost = post;
    this.sharedDate = date;
  }

  getSharedPost(): string {
    return this.sharedPost;
  }

  getSharedDate(): Date {
    return this.sharedDate;
  }

  clearPostAndDate() {
    this.sharedPost = "";
    this.sharedDate = new Date();
  }


}
