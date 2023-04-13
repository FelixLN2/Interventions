import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ProblemeComponent } from './probleme.component';
import { TypeproblemeService } from './typeprobleme.service';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule], //ajouté
      declarations: [ ProblemeComponent ],
      providers:[TypeproblemeService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /* it('should create', () => {
    expect(component).toBeTruthy();
  });*/

  it('#1 Zone PRÉNOM invalide avec 2 caractères', () =>{
  
    let zone = component.problemeForm.get('prenom');
    zone.setValue('a'.repeat(2));
    let errors = zone.errors || {};
    //toBeTruthy() == expects recevoir une erreur
    expect(errors['nbreCaracteresInsuffisant']).toBeTruthy();
  });
  it('#2 Zone PRÉNOM valide avec 3 caractères', () =>{
    let zone = component.problemeForm.get('prenom');
    zone.setValue('a'.repeat(3));
    let errors = zone.errors || {};
    //ToBeFalsy() === expects recevoir pas d'erreur
    expect(errors['nbreCaracteresInsuffisant']).toBeFalsy();
  });
  it('#3 Zone PRÉNOM valide avec 200 caractères', () =>{
    let zone = component.problemeForm.get('prenom');
    zone.setValue('a'.repeat(200));
    let errors = zone.errors || {};
    expect(errors['nbreCaracteresInsuffisant']).toBeFalsy();
  });
  it('#4 Zone PRÉNOM invalide avec aucune valeur', () =>{
    let zone = component.problemeForm.get('prenom');
  
    let errors = zone.errors || {};
    expect(errors['nbreCaracteresInsuffisant']).toBeTruthy();
  });
 it('#5 Zone PRÉNOM invalide avec 10 espaces', () =>{
    let zone = component.problemeForm.get('prenom');
    zone.setValue('          ');
    let errors = zone.errors || {};
    expect(errors['nbreCaracteresInsuffisant']).toBeTruthy();
  });
  it('#6 Zone PRÉNOM invalide avec 2 espaces et 1 caractère', () =>{
    let zone = component.problemeForm.get('prenom');
    zone.setValue('  a');

    let errors = zone.errors || {};
    expect(errors['nbreCaracteresInsuffisant']).toBeTruthy();
  }); 
  it('#15 | Zone TELEPHONE est désactivée quand ne pas me notifier', () =>{
     component.appliquerNotifications('pasnotification');

    let zone = component.problemeForm.get('telephone');
    expect(zone.disabled).toBeTruthy();
  }); 
  it('#16 | Zone TELEPHONE est vide quand ne pas me notifier', () =>{
    component.appliquerNotifications('pasnotification');
    let zone = component.problemeForm.get('telephone');
    expect(zone.disabled).toBeTruthy();


  }); 
  it('#17 | Zone ADRESSE COURRIEL est désactivée quand ne pas me notifier', () =>{
    component.appliquerNotifications('pasnotification');

    let zone = component.problemeForm.get('courrielGroup.courriel');
    expect(zone.disabled).toBeTruthy();
  }); 
  it('#18 | Zone CONFIRMER COURRIEL est désactivée quand ne pas me notifier', () =>{
    component.appliquerNotifications('pasnotification');
    
    let zone = component.problemeForm.get('courrielGroup.courrielConfirmation');
                        
    expect(zone.disabled).toBeTruthy();


  }); 
  //----------
  it('#19 | Zone TELEPHONE est désactivée quand ne pas me notifier', () => {
    component.appliquerNotifications('pasnotification');
    let zone = component.problemeForm.get('telephone');
    expect(zone.status).toEqual('DISABLED'); 
  });
  it('#20 | Zone ADRESSE COURRIEL est activée quand notifier par courriel', () => {
    component.appliquerNotifications('courriel');
    let zone = component.problemeForm.get('courrielGroup.courriel');
    expect(zone.enabled).toBeTrue();
  });
  it('#21 | Zone CONFIRMER COURRIEL est activée quand notifier par courriel', () => {
    component.appliquerNotifications('courriel');
    let zone = component.problemeForm.get('courrielGroup.courrielConfirmation');
    expect(zone.enabled).toBeTrue(); 
  });
  it('#22 | Zone ADRESSE COURRIEL est invalide sans valeur quand notifier par courriel', () => {
    component.appliquerNotifications('courriel');
    let zone = component.problemeForm.get('courrielGroup.courriel');
    expect(zone.status).toEqual('INVALID'); 
  });
  it('#23 | Zone CONFIRMER COURRIEL est invalide sans valeur quand notifier par courriel', () => {
    component.appliquerNotifications('courriel');
    let zone = component.problemeForm.get('courrielGroup.courrielConfirmation');
    expect(zone.status).toEqual('INVALID');
  });
  it('#24 | Zone ADRESSE COURRIEL est invalide avec un format non conforme', () => {
    component.appliquerNotifications('courriel');
    let zone = component.problemeForm.get('courrielGroup.courriel');
    expect(zone.status).toEqual('INVALID'); 
  });
  it('#25 | Zone ADRESSE COURRIEL sans valeur et Zone CONFIRMER COURRIEL avec valeur valide retourne null', () => {
    component.appliquerNotifications('pasnotification');
    let zone = component.problemeForm.get('telephone');
    expect(zone.status).toEqual('DISABLED'); 
  });
  it('#26 | Zone ADRESSE COURRIEL avec valeur valide et Zone CONFIRMER COURRIEL sans valeur retourne null', () => {
    component.appliquerNotifications('pasnotification');
    let zone = component.problemeForm.get('telephone');
    expect(zone.status).toEqual('DISABLED'); 
  });
  it('#27 | Zones ADRESSE COURRIEL et CONFIRMER COURRIEL sont invalides si les valeurs sont différentes quand notifier par courriel', () => {
    component.appliquerNotifications('pasnotification');
    let zone = component.problemeForm.get('telephone');
    expect(zone.status).toEqual('DISABLED'); 
  });
  it('#28 | Zones ADRESSE COURRIEL et CONFIRMER COURRIEL sont valides si les valeurs sont identiques quand notifier par courriel', () => {
    component.appliquerNotifications('pasnotification');
    let zone = component.problemeForm.get('telephone');
    expect(zone.status).toEqual('DISABLED'); 
  });

});
