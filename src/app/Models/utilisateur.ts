export class Utilisateur {
    matricule: string;
    nom: string;
    prenom: string;
    societe: string;
    codeEtablissement: string;
    etablissement: string;
    codeEmploi: string;
    emploi: string;
    codeUo: string;
    uo: string;
    mail: string;
    direction: string;
    manager1: string;
    manager2: string;
    affectation: string;
    comex: string;
    role: string;
  
    constructor(
      matricule: string,
      nom: string,
      prenom: string,
      societe: string,
      codeEtablissement: string,
      etablissement: string,
      codeEmploi: string,
      emploi: string,
      codeUo: string,
      uo: string,
      mail: string,
      direction: string,
      manager1: string,
      manager2: string,
      affectation: string,
      comex: string,
      role: string
    ) {
      this.matricule = matricule;
      this.nom = nom;
      this.prenom = prenom;
      this.societe = societe;
      this.codeEtablissement = codeEtablissement;
      this.etablissement = etablissement;
      this.codeEmploi = codeEmploi;
      this.emploi = emploi;
      this.codeUo = codeUo;
      this.uo = uo;
      this.mail = mail;
      this.direction = direction;
      this.manager1 = manager1;
      this.manager2 = manager2;
      this.affectation = affectation;
      this.comex = comex;
      this.role = role;
    }
  }
  