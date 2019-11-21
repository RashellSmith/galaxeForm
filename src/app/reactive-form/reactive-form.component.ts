import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormViewService} from 'src/app/form-view.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  
  newNews:string = "Congratulations You Just Submitted A Reactive Form!";
  submitted = false;

  reactiveForm = this.fb.group({
      firstName: ['',[Validators.required,Validators.minLength(2)]],
      lastName: ['',[Validators.required,Validators.minLength(2)]],
      email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
  });

  onSubmit() {
    this.newMessage();
    console.warn(this.reactiveForm.value);
  }
  get firstName() {
    return this.reactiveForm.get('firstName');
  }
  get lastName() {
    return this.reactiveForm.get('lastName');
  }
  get email() {
    return this.reactiveForm.get('email');
  }
  constructor(private fb: FormBuilder, private formview: FormViewService) { }

  ngOnInit() {
   
  }
newMessage(){
  this.formview.changeForm(this.reactiveForm.value);
  this.formview.getNews(this.newNews);
}

}
