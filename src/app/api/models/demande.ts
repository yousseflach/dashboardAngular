/* tslint:disable */
/* eslint-disable */
import { Hierarchie } from '../models/hierarchie';
import { Tache } from '../models/tache';
export interface Demande {
  attributes?: boolean;
  competencesManageriales?: string;
  competencesTechniques?: string;
  creerPar?: string;
  dateDeCreation?: string;
  dateDeModification?: string;
  formation?: string;
  hierarchies?: Array<Hierarchie>;
  id?: string;
  matricule?: string;
  siteRattachement?: string;
  statut?: string;
  taches?: Array<Tache>;
  titrePoste?: string;
  type?: string;
}
