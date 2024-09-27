import { AfterViewChecked, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Utilisateur } from '../Models/utilisateur';
import { Demande } from '../Models/demande';
import { demandeurService } from '../services/Demandeur/demandeur.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfilerequisComponent } from '../profilerequis/profilerequis.component';
import { NgForm } from '@angular/forms';
import { apiurl } from '../config';
import { HttpClient } from '@angular/common/http';
import { SousDirection } from '../Models/sousdirection';
import { Societe } from '../Models/societe';


@Component({
  selector: 'app-ajoutercollaborateur',
  templateUrl: './ajoutercollaborateur.component.html',
  styleUrls: ['./ajoutercollaborateur.component.css']
})
export class AjoutercollaborateurComponent implements AfterViewChecked {
  matricule: string = localStorage.getItem('utilisateur') ? JSON.parse(localStorage.getItem('utilisateur') || '{}').matricule : '';
  selectedRole: string = 'Direction';  // Valeur par défaut
  secondLabel: string = 'Direction';  // Valeur par défaut du label
  listemploi: string[] = [];

  updateLabel(event: string) {
    this.secondLabel = event;
  }

  // Declaration des variables===========================================================================
  textValue: string = ''; // Property to store the value of the textarea
  characterLimit: number = 850; // Property for character limit
  desactiverTexterea: boolean = false;
  formulaire1: boolean = true;
  formulaire2: boolean = false;
  formulaire3: boolean = false;
  formulaire4: boolean = false;
  formulaire5: boolean = false;
  // selectedCategorie: string = 'CSU';
  progress: number = 25;
  visible: string = '';
  visibleselect: string = 'cp';
  names = [];
  filteredNames: any[] = [];
  //correct listesousdirection

  listesousdirection: SousDirection[] = [];
  emploi: string = 'test';
  uo: string = 'test';

  steps = [
    { counter: 1, name: 'Context', status: 'completed' },
    { counter: 2, name: 'Relation', status: '' },
    { counter: 3, name: 'Mission', status: '' },
    { counter: 4, name: 'Profil', status: '' }, // Status can be empty or set to 'completed' or 'active' as needed
    { counter: 5, name: 'Poste', status: '' }
  ];

  utilisateur: Utilisateur = localStorage.getItem('utilisateur') ? JSON.parse(localStorage.getItem('utilisateur') || '{}') : {};
  superieurhierarchique: string = this.utilisateur.nom + ' ' + this.utilisateur.prenom + ' ' + this.utilisateur.matricule;
  test: string = 'salam';
  errorMsg: Array<string> = [];
  listesocietes: Societe[] = [];
  textAreaValue: string = '';
  listedirectionoumagasin: string[] = [];
  listesemplois: string[] = [];
  demandeModel: Demande = {
    id: '',
    type: "collaborateur",
    siteRattachement: "",
    titrePoste: "",
    matricule: this.utilisateur.matricule,
    competencesTechniques: "",
    competencesManageriales: "",
    formation: "",
    dateDeCreation: new Date(),
    statut: "",
    attributes: true,
    natureDeRecrutement: "cp",
    posteBudgete: false,
    motif: "",
    superviseurFonctionnel: "",
    relationsHierarchiques: "",
    relationsFonctionnelles: "",
    relationsExterne: "",
    missionGlobale: "",
    principalesActivites: "",
    indicateurs: "",
    typeContrat: "",
    categorie: "CAD",
    typeRecrutement: "",
    societe: "COF",
    directionoumagasin: "",
    sousDirection: "",
    niveauDetude: "bac+5",
    niveauDexperience: "plus2ans",
    creerPar: this.utilisateur.matricule,
    taches: [],
    hierarchies: []
  };


  constructor(private demandeurService: demandeurService, private ngbModal: NgbModal, private http: HttpClient) {

  }

  ngOnInit(): void {

    this.demandeurService.sauvegarderDemande_get(null,this.utilisateur.matricule.trim()).then((data: any) => {
      if (data)
      this.demandeModel = data;
      console.log("Demande sauvegardée :", data);
      this.visibleselect = this.demandeModel.natureDeRecrutement == "cp" ? "cp" : "Remplacement";
    }, (error: any) => {
      console.error('Error fetching data:', error);
    }
    )
    this.demandeModel.matricule = this.utilisateur.matricule;
    this.http.get(`${apiurl}/listsociete`).subscribe((data: any) => {
      this.listesocietes = data;
      console.log("Listes des sociétés :", this.listesocietes);
      // console.log("Listes des sociétés après réception des données :", this.listesocietes);
    });

    // console.log("ngOnInit Ajouter Collaborateur");
    // console.log("Listes des sociétés avant réception des données :", this.listesocietes);

    this.listedemandeurs(this.utilisateur.emploi);
    this.listesousdirections(this.matricule);
    this.changeListe("fonctioncentral", "COF");
    this.uo = this.utilisateur.uo;
    this.emploi = this.utilisateur.emploi;
    this.listemplois(this.utilisateur.etablissement);
  }
  listedemandeurs(direction: string): void {
    console.log("direction: " + direction);
    this.demandeurService.listedemandeur(direction).then(
      (data) => {
        this.names = data;
        console.log("the names: " + this.names);
        this.changeemploiUO(this.superieurhierarchique);
      },
      (error) => {
        console.error("Error fetching names:", error);
      }
    )

  }
  listemplois(direction: string): void {
    this.demandeurService.listeEmplois(direction).then(
      (data) => {
        this.listesemplois = data;
        console.log("the listesemplois: " + this.listesemplois);
      },
      (error) => {
        console.error("Error fetching names:", error);
      }
    )
  }

  changeListeDemandeur(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.listedemandeurs(selectedValue);
    this.listemplois(selectedValue);
  }




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

  Suivant() {
    if (this.formulaire1) {
      this.formulaire1 = false;
      this.formulaire2 = true;
      this.progress = 50;
      this.steps[1].status = 'completed';
    } else if (this.formulaire2) {
      this.formulaire2 = false;
      this.formulaire3 = true;
      this.progress = 75;

      this.steps[2].status = 'completed';
    } else if (this.formulaire3) {
      this.formulaire3 = false;
      this.formulaire4 = true;
      this.progress = 100;
      this.steps[3].status = 'completed';
    } else if (this.formulaire4) {
      this.formulaire4 = false;
      this.formulaire5 = true;
      this.steps[4].status = 'completed';
    } else {
      const soumettre = this.ngbModal.open(ProfilerequisComponent, {
        backdrop: 'static',
        keyboard: false,
        centered: true,
        size: 'xl'
      });
      soumettre.componentInstance.demande = this.demandeModel;
      soumettre.componentInstance.buttonText = 'Soumettre';
    }

    // this.demandeurService.saveDemande(this.demandeModel);
  }

  Precedent() {
    if (this.formulaire2) {
      this.formulaire2 = false;
      this.formulaire1 = true;
      this.progress = 25;
      this.steps[1].status = '';
      this.steps[0].status = 'completed';

    } else if (this.formulaire3) {
      this.formulaire3 = false;
      this.formulaire2 = true;
      this.progress = 50;
      this.steps[2].status = '';
      this.steps[1].status = 'completed';
    } else if (this.formulaire4) {
      this.formulaire4 = false;
      this.formulaire3 = true;
      this.progress = 75;
      this.steps[3].status = '';
      this.steps[2].status = 'completed';
    } else if (this.formulaire5) {
      this.formulaire5 = false;
      this.formulaire4 = true;
      this.progress = 100;
      this.steps[4].status = '';
      this.steps[3].status = 'completed';
    }
  }

  onSubmit(myForm: NgForm) {
    console.log(myForm.value);
  }
  changeselect(): void {
    this.demandeModel.posteBudgete = this.demandeModel.natureDeRecrutement == 'Remplacement';
  }

  @ViewChild('fonction') fonctionElement!: ElementRef;
  private previousSociete: string = '';
  private previousRole: string = '';
  ngAfterViewChecked() {
    this.updateRoleAndSociete();
  }

  updateRoleAndSociete() {
    if (this.fonctionElement) {
      const currentRole = this.fonctionElement.nativeElement.value;
      const currentSociete = this.demandeModel.societe;

      if (currentRole !== this.previousRole || currentSociete !== this.previousSociete) {
        this.previousRole = currentRole;
        this.previousSociete = currentSociete;
        this.changeListe(currentRole, currentSociete);
      }
    }
  }







  changeListe(selectedValue: string, societe: string) {
    console.log("fonction:" + selectedValue + " societe:" + societe);

    this.demandeurService.listDirectionOUMagasin(selectedValue, societe).then(
      (data) => {
        this.listedirectionoumagasin = data;
        this.demandeModel.directionoumagasin = this.listedirectionoumagasin[0];
        this.changeListeDemandeur(new Event(this.listedirectionoumagasin[0]));
      }, (error) => {
        console.log(error);
      }
    )
  }




  filterNames() {
    const searchTerm = this.superieurhierarchique.toLowerCase();
    this.filteredNames = this.names.filter((name: any) =>
      name.nom.toLowerCase().includes(searchTerm) ||
      name.prenom.toLowerCase().includes(searchTerm) ||
      name.matricule.toLowerCase().includes(searchTerm)
    );
    console.log("filteredNames:");
  }

  listesousdirections(matricule: string): void {
    if (!matricule) {
      return;
    }
    matricule = matricule.trim();
    const liste = matricule.split(" ");
    matricule = liste.length > 1 ? liste[liste.length - 1] : matricule;
    this.demandeModel.matricule = matricule;
    this.demandeurService.listesousdirection(matricule.toString()).then(
      (data) => {
        this.listesousdirection = data;
        this.demandeModel.sousDirection = data[0].code_uo;
        console.log("codeinit:" + this.demandeModel.sousDirection);

        this.recupereemploi(this.demandeModel.sousDirection);
      }, (error) => {
        console.log(error);
      }
    )
  }

  soumettre(): void {
    this.demandeModel.attributes =false;
    console.log("soumettre"+this.demandeModel.missionGlobale);
    this.demandeurService.sauvegarderDemande_get(this.demandeModel, this.utilisateur.matricule.trim()).then(
      (data) => {
        this.demandeModel = data;
        console.log(data);
      }, (error) => {
        console.log(error);
      }
    )
  }

  recupereemploi(event: string | any): void {
    const code_uo = typeof event === 'string' ? event : event.target.value.toString();
    console.log("code_uo:" + code_uo);
    this.demandeurService.listeEmploi(code_uo).then(
      (data) => {
        this.demandeModel.relationsHierarchiques = data.join(" / ");
      }, (error) => {
        console.log(error);
      }
    )
  }
  changeemploiUO(event: string | any): void {
    console.log("event:" + event);
    let matricule = typeof event === 'string' ? event.trim().split(" ") : event.target.value.trim().split(" ");
    matricule = matricule.length > 1 ? matricule[matricule.length - 1] : matricule[0];
    console.log("matricule salam:" + this.names);
    this.names.filter((name: any) => {
      if (name.matricule.trim() === matricule.trim()) {
        console.log(name.nom);
        this.uo = name.uo;
        this.emploi = name.emploi;
        console.log("uo:" + name.uo + " emploi:" + name.emploi + " matricule:" + name.matricule);
      }

    });
  }


}
