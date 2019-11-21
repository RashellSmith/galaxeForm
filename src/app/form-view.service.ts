import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormViewService {
  private formView = new BehaviorSubject<any>("");
  private news = new BehaviorSubject<string>("Submit a form it's easy! You'll love it!");


  currentNews = this.news.asObservable();
  currentForm = this.formView.asObservable();

  constructor() { }
  changeForm(form: any){
    this.formView.next(form);
    
  }

  getNews(news: string){
     this.news.next(news);
  }
  

}
