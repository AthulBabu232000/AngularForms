import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  handleSubmit(myForm:any){
    console.log(myForm.value);
    console.log(myForm.form.controls['email'].errors);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
