import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  handleSubmit(myForm:any){
    console.log(myForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
