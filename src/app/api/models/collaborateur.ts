/* tslint:disable */
/* eslint-disable */
import { Hierarchie } from '../models/hierarchie';
import { Tache } from '../models/tache';
export interface Collaborateur {
  attributes?: boolean;
  categorie?: string;
  competencesManageriales?: string;
  competencesTechniques?: string;
  creerPar?: string;
  dateDeCreation?: string;
  dateDeModification?: string;
  directionoumagasin?: string;
  formation?: string;
  hierarchies?: Array<Hierarchie>;
  id?: string;
  indicateurs?: string;
  matricule?: string;
  missionGlobale?: string;
  motif?: string;
  natureDeRecrutement?: string;
  niveauDetude?: string;
  posteBudgete?: boolean;
  principalesActivites?: string;
  relationsExterne?: string;
  relationsFonctionnelles?: string;
  relationsHierarchiques?: string;
  siteRattachement?: string;
  societe?: string;
  sousDirection?: string;
  statut?: string;
  superviseurFonctionnel?: string;
  taches?: Array<Tache>;
  titrePoste?: string;
  type?: string;
  typeContrat?: string;
  typeRecrutement?: string;
}
