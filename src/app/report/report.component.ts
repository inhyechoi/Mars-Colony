import { Component, OnInit } from '@angular/core';
import { NewEncounter, Alien } from '../models';
import{ 
  FormGroup, 
  FormControl, 
  FormBuilder, 
  Validators, 
  ValidatorFn, 
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  newEncounter: NewEncounter;
  alienType: Alien[];
  reportForm: FormGroup;

  constructor() { 
    this.alienType = [
      { type : "Special K", id: 1, sumitted_by: '1', description: "Special."},
      { type : "Endomorph", id: 2, sumitted_by: '1', description: "Slimy, and gross."},
      { type : "Endomorph", id: 3, sumitted_by: '1', description: "End-to-end freakyness"},
      { type : "Octospider", id: 4, sumitted_by: '1', description: "Rendevous with Rama."},
      { type : "The Predator", id: 5, sumitted_by: '1', description: "Yeah, he's here. Call Arnold."},
      { type : "Darth Vader", id: 6, sumitted_by: '3', description: "Got daddy issues."},
      { type : "Donald Trump", id: 7, sumitted_by: '3', description: "Douche."},
      { type : "Yoda", id: 8, sumitted_by: '3', description: "Do or do not do; there is not try."}
    ];
    this.reportForm = new FormGroup({
      type: new FormControl('none', [Validators.required]),
      date: new FormControl('',[Validators.required]),
      colonist_id: new FormControl('',[Validators.required]),
      atype: new FormControl('',[Validators.required]),
      action: new FormControl('',[Validators.required]),

    });


  }

logEncounter(){
  console.log(this.reportForm.controls);
}


  ngOnInit() {
  }

}
