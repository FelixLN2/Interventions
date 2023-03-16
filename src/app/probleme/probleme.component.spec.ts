import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ProblemeComponent } from './probleme.component';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule], //ajouté
      declarations: [ ProblemeComponent ]
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


});
