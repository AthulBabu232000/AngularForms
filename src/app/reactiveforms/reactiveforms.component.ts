import { Component, OnInit, ViewChild } from '@angular/core';
import { feedback } from 'src/feedback';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {
@ViewChild('myForm') feedbackFormDirective:any;
  feedback!:feedback;
  feedbackForm!:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.createGroup()
  }
createGroup(){
 
this.feedbackForm=this.fb.group(
  {
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    telnum: 0,
    email:['',Validators.required],
    message:['',Validators.required]
  }
)

}
onSubmit(){
 
  this.feedback=this.feedbackForm.value;
  console.log(this.feedback);
  this.feedbackForm.reset(
   {
    firstname:'',
    lastname:'',
    telnum: 0,
    email:'',
    message:''
   }
  );
  this.feedbackFormDirective.resetForm();
}
  ngOnInit(): void {
  }

}
