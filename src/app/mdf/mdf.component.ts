import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {

  constructor(private formbuilder: FormBuilder){}
 
  mdForm: FormGroup;
  showConfirmation:boolean=false;

  ngOnInit() {

    this.mdForm = this.formbuilder.group({
      username:'',
      email:'',
      password:'',
      password2:''
      });
      
  }

  onSubmit(form) {
    console.log(form);
    form.reset();
    this.showConfirmation=true;
  }

  fillSampleData(){
    this.mdForm = this.formbuilder.group({
      username:'xx',
      email:'xx',
      password:'xx',
      password2:'xxx'
      });

  }

  hideConfirmation(){
    this.showConfirmation=false;
  }

  
}
