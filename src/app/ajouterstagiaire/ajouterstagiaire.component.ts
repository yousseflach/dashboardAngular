import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouterstagiaire',
  templateUrl: './ajouterstagiaire.component.html',
  styleUrls: ['./ajouterstagiaire.component.css']
})
export class AjouterstagiaireComponent implements OnInit {
  textValue: string = ''; // Property to store the value of the textarea
  characterLimit: number = 850; // Property for character limit
  desactiverTexterea: boolean = false;

  selectedCategorie: string = 'CSU';
  progress: number = 25;


//Declaration des fonctions===========================================================================
  onTextareaInput(event: any) {
    if (event.target.value.length >= this.characterLimit) {
      this.textValue = event.target.value.substring(0, this.characterLimit);
      this.desactiverTexterea = true; // Disable the textarea if character limit is reached
      alert("vous avez depasser le nombre de caractère autorise");
    } else {
      this.desactiverTexterea = false; // Enable the textarea if character limit is not reached
    }
  }
  frmaDate: string = "";
  test?: Date;
  date?: Date;


  stageModel: any ={
    titre: "string11",
    type: "string",
    siteRattachement: "string",
    direction: "string",
    magasin: "string",
    titrePoste: "string",
    superviseur: "string",
    competencesTechniques: "string",
    competencesManageriales: "string",
    dateDeCreation: this.frmaDate = moment(this.date).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
    dateDeModification: this.frmaDate = moment(this.date).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
    stageType: "string",
    formationCandidat: "string",
    niveauEducation: "string",
    ecolesPreferees: "string",
    natureDuStage: "string",
    dureeDuStage: 0,
    dateDeDebut: this.frmaDate = moment(this.test).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
    contenuDuStage: "string",
    livrableAttendu: "string"
  }
  errorMsg: Array<string> = [];



  ngOnInit(): void {
  }

  constructor( private router: Router){

  }



  Suivant() {
  }
}
