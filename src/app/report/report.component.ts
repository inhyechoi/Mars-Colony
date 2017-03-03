import { Component, OnInit } from '@angular/core';
import { NewEncounter, Alien } from '../models';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

import {
  ALIENS_URL,
  ENCOUNTERS_URL
} from '../models/API';

import { AliensAPIService } from '../apiService/aliens';
import { EncountersAPIService } from '../apiService/encounters';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AliensAPIService, EncountersAPIService]
})
export class ReportComponent implements OnInit {
  alienTypes: Alien[];
  reportForm: FormGroup;
  clickedButton: boolean;
  newEncounter: NewEncounter;

  constructor(
    private aliensAPIService: AliensAPIService,
    private encounterAPIService: EncountersAPIService
  ) {
    this.getAlienTypes();

    this.clickedButton = false;

    this.reportForm = new FormGroup({
      atype: new FormControl('none', [Validators.required]),
      action: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }


  getAlienTypes() {
    this.aliensAPIService.getAlienTypes()
      .subscribe((result) => {
        this.alienTypes = result;
      });
  }
  postNewEncounter(event) {
    event.preventDefault();
    this.clickedButton = true;
    
    if (this.reportForm.invalid) {
      // The form is invalid do nothing...

    }
    else {
      const date = '2016-11-18';
      const atype = this.reportForm.get('atype').value;
      const action = this.reportForm.get('action').value;
      const colonist_id = 4;

      const newEncounter: NewEncounter = new NewEncounter(date, atype, action, colonist_id);
      const encounterPostRequest = { encounter: newEncounter }

      this.encounterAPIService.saveNewEncounters(encounterPostRequest)
                              .subscribe((result) => {
                                console.log('Encounter was reported:', result);
                              });
    }
  }

}


