import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

username:string;
email:string;
password:string;
password2:string;
showConfirmation:boolean=false;

  constructor() { }

  ngOnInit() {
  }


  logForm(ngForm) {
    console.log(ngForm.value);
    ngForm.resetForm();
    this.showConfirmation=true;
  }

  fillSampleData(){
    this.username = "Wojciech";
    this.email = "example@contact.com";
    this.password = "password";
    this.password2 = "password";    
  }

  
  hideConfirmation(){
    this.showConfirmation=false;
  }

  

}
