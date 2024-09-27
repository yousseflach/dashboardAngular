// candidate.model.ts

export enum StatutSelection {
    CHOISI,
    EN_ATTENTE,
    REJETE
  }
  
  export class Candidat {
    id: string; // UUIDs are represented as strings in TypeScript
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    cvPath: string;
    commentaire: string;
    demandeId: string; // Represent the foreign key as a string
    statutSelection: StatutSelection;
  
    constructor(
      id: string,
      nom: string,
      prenom: string,
      email: string,
      telephone: string,
      cvPath: string,
      commentaire: string,
      demandeId: string,
      statutSelection: StatutSelection
    ) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.email = email;
      this.telephone = telephone;
      this.cvPath = cvPath;
      this.commentaire = commentaire;
      this.demandeId = demandeId;
      this.statutSelection = statutSelection;
    }
  }
  