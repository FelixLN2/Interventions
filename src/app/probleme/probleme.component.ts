import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LongueurMinimumComponent } from '../shared/longueur-minimum/longueur-minimum.component';
import { ITypeProbleme } from './ITypeProbleme';
import { TypeproblemeService } from './typeprobleme.service';
import { EmailMatcherComponent } from '../shared/email-matcher/email-matcher.component';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {

  problemeForm: FormGroup;
  typesProbleme: ITypeProbleme[];
  errorMessage: string;
  save(): void {
  }

  constructor(private fb: FormBuilder, private typeproblemeService: TypeproblemeService) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenom: ['', [LongueurMinimumComponent.longueurMinimum(3), Validators.required]],
      
      noTypeProbleme: ['', Validators.required],
      courrielGroup: this.fb.group({
        courriel: [{ value: '', disabled: true }],
        courrielConfirmation: [{ value: '', disabled: true }],
      }), 
      telephone: [{ value: '', disabled: true }],
    });

    this.typeproblemeService.obtenirTypesProbleme()
      .subscribe(probleme => this.typesProbleme = probleme,
        error => this.errorMessage = <any>error);


  }


  appliquerNotifications(typeNotifications: string): void {
    const courrielControl = this.problemeForm.get('courrielGroup.courriel');
    const courrielConfirmationControl = this.problemeForm.get('courrielGroup.courrielConfirmation');
    const courrielGroupControl = this.problemeForm.get('courrielGroup');
    const telephoneControl = this.problemeForm.get('telephone');
    // Tous remettre à zéro

    courrielGroupControl.clearValidators();
    courrielGroupControl.reset();  // Pour enlever les messages d'erreur si le controle contenait des données invaldides
    courrielGroupControl.disable();

    courrielControl.clearValidators();
    courrielControl.reset();
    courrielControl.disable();

    courrielConfirmationControl.clearValidators();
    courrielConfirmationControl.reset();
    courrielConfirmationControl.disable();

    telephoneControl.clearValidators();
    telephoneControl.reset();
    telephoneControl.disable();

    // if (typeNotifications === 'pasnotification') {
    //   //         dateCommandeControl.setValidators([Validators.required]);      
    //   //         dateCommandeControl.enable();  
    //   //         dateExpeditionControl.setValidators([Validators.required]);              
    //   //         dateExpeditionControl.enable();  
    //   //         // Si le validateur est dans un autre fichier l'écire sous la forme suivante : 
    //   //         // ...Validators.compose([classeDuValidateur.NomDeLaMethode()])])
    //   //          datesGroupControl.setValidators([Validators.compose([datesValides])]); 
    //   courrielGroupControl.clearValidators();
    //   courrielGroupControl.reset();
    //   courrielGroupControl.disable();

    //   courrielControl.clearValidators();
    //   courrielControl.reset();
    //   courrielControl.disable();

    //   courrielConfirmationControl.clearValidators();
    //   courrielConfirmationControl.reset();
    //   courrielConfirmationControl.disable();

    //   telephoneControl.clearValidators();
    //   telephoneControl.reset();
    //   telephoneControl.disable();
    // }
    //   else
    //   {
    //     if(typeNotifications === 'Inconnu')
    //     {
    //       dateCommandeControl.setValidators([Validators.required]);      
    //       dateCommandeControl.disable();           
    //     }
    //   }

    if (typeNotifications === 'courriel') {
      courrielGroupControl.setValidators([Validators.compose([EmailMatcherComponent.courrielDifferents()])])
      courrielGroupControl.enable();
      courrielControl.setValidators([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]);
      
      courrielControl.enable();
      courrielConfirmationControl.setValidators([Validators.required]);
      courrielConfirmationControl.enable();
    }
    if (typeNotifications === 'telephone') {
      telephoneControl.setValidators([Validators.pattern('[0-9]+'), Validators.minLength(10), Validators.maxLength(10), Validators.required]);
      telephoneControl.enable();
    }


    courrielControl.updateValueAndValidity();
    courrielConfirmationControl.updateValueAndValidity();
    telephoneControl.updateValueAndValidity();
  }

}
