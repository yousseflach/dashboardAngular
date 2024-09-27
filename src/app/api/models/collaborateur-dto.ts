/* tslint:disable */
/* eslint-disable */
import { TacheDto } from '../models/tache-dto';
export interface CollaborateurDto {
  attributes?: boolean;
  categorie?: string;
  competencesManageriales?: string;
  competencesTechniques?: string;
  creerPar?: string;
  dateDeCreation?: string;
  dateDeModification?: string;
  directionoumagasin?: string;
  formation?: string;
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
  taches?: Array<TacheDto>;
  titrePoste?: string;
  type?: string;
  typeContrat?: string;
  typeRecrutement?: string;
}
