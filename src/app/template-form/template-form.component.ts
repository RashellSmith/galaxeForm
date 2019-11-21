import { Component, OnInit } from '@angular/core';
import { FormViewService} from 'src/app/form-view.service';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})

export class TemplateFormComponent implements OnInit {
message:any;
newNews:string = "You Just Submitted A Template Driven Form!"
model = {firstName:'',lastName:'',email:''};
submitted = false;
  onSubmit() { 
    this.newMessage();
    this.submitted = true; 
  }

  get json() { 
    return JSON.stringify(this.model); 
  }
  
  
  constructor(private formview: FormViewService) { }

  ngOnInit() {
 
  }
  newMessage(){
  this.formview.changeForm(this.model);
  this.formview.getNews(this.newNews);
}

}
