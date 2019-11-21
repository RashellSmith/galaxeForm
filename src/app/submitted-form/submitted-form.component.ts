import { Component, OnInit } from '@angular/core';
import { FormViewService} from 'src/app/form-view.service';

@Component({
  selector: 'app-submitted-form',
  templateUrl: './submitted-form.component.html',
  styleUrls: ['./submitted-form.component.css']
})
export class SubmittedFormComponent implements OnInit {
message:any;
news: string;
  constructor(private formview: FormViewService) { }

  ngOnInit() {
    this.formview.currentForm.subscribe(message => this.message = message);
    this.formview.currentNews.subscribe(message => this.news= message);
  }

}
