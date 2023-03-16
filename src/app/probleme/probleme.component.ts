import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LongueurMinimumComponent } from '../longueur-minimum/longueur-minimum.component';


@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit{

problemeForm: FormGroup;
save(): void {
}

constructor(private fb: FormBuilder){}

ngOnInit(){
  this.problemeForm = this.fb.group({
    prenom: ['' , [LongueurMinimumComponent.longueurMinimum(3), Validators.required]], });
}

}
