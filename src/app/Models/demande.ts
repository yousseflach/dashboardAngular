import { Hierarchie } from "./hierarchie";
import { Tache } from "./tache";

export class Demande {
  id: string;  // UUIDs are represented as strings in TypeScript
  type: string;
  siteRattachement: string;
  titrePoste: string;
  matricule: string;
  competencesTechniques: string;
  competencesManageriales: string;
  formation: string;
  dateDeCreation!: Date; // LocalDateTime is represented as Date in TypeScript
  statut: string;
  attributes: boolean;
  natureDeRecrutement: string;
  posteBudgete: boolean;
  motif: string;
  superviseurFonctionnel: string;
  relationsHierarchiques: string;
  relationsFonctionnelles: string;
  relationsExterne: string;
  missionGlobale: string;
  principalesActivites: string;
  indicateurs: string;
  typeContrat: string;
  categorie: string;
  typeRecrutement: string;
  societe: string;
  directionoumagasin: string;
  sousDirection: string;
  niveauDetude: string;
  creerPar: string;
  niveauDexperience: string;
  taches:Tache[];
  hierarchies:Hierarchie[];
  constructor(
    id: string,
    type: string,
    siteRattachement: string,
    titrePoste: string,
    matricule: string,
    competencesTechniques: string,
    competencesManageriales: string,
    formation: string,
    statut: string = "En cours",
    attributes: boolean,
    natureDeRecrutement: string,
    posteBudgete: boolean,
    motif: string,
    superviseurFonctionnel: string,
    relationsHierarchiques: string,
    relationsFonctionnelles: string,
    relationsExterne: string,
    missionGlobale: string,
    principalesActivites: string,
    indicateurs: string,
    typeContrat: string,
    categorie: string,
    typeRecrutement: string,
    societe: string,
    directionoumagasin: string,
    sousDirection: string,
    niveauDetude: string,
    creerPar: string,
    niveauDexperience: string,
    taches:Tache[],
    hierarchies:Hierarchie[]
) {
    this.id = id;
    this.type = type;
    this.siteRattachement = siteRattachement;
    this.titrePoste = titrePoste;
    this.matricule = matricule;
    this.competencesTechniques = competencesTechniques;
    this.competencesManageriales = competencesManageriales;
    this.formation = formation;
    this.statut = statut;
    this.attributes = attributes;
    this.natureDeRecrutement = natureDeRecrutement;
    this.posteBudgete = posteBudgete;
    this.motif = motif;
    this.superviseurFonctionnel = superviseurFonctionnel;
    this.relationsHierarchiques = relationsHierarchiques;
    this.relationsFonctionnelles = relationsFonctionnelles;
    this.relationsExterne = relationsExterne;
    this.missionGlobale = missionGlobale;
    this.principalesActivites = principalesActivites;
    this.indicateurs = indicateurs;
    this.typeContrat = typeContrat;
    this.categorie = categorie;
    this.typeRecrutement = typeRecrutement;
    this.societe = societe;
    this.directionoumagasin = directionoumagasin;
    this.sousDirection = sousDirection;
    this.niveauDetude = niveauDetude;
    this.creerPar = creerPar;
    this.niveauDexperience = niveauDexperience;
    this.taches=taches;
    this.hierarchies=hierarchies;
}

}
