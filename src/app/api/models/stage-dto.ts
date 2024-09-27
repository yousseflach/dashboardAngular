/* tslint:disable */
/* eslint-disable */
import { TacheDto } from '../models/tache-dto';
export interface StageDto {
  attributes?: boolean;
  competencesManageriales?: string;
  competencesTechniques?: string;
  contenuDuStage?: string;
  creerPar?: string;
  dateDeCreation?: string;
  dateDeDebut?: string;
  dateDeModification?: string;
  dureeDuStage?: number;
  ecolesPreferees?: string;
  formation?: string;
  formationCandidat?: string;
  id?: string;
  livrableAttendu?: string;
  matricule?: string;
  natureDuStage?: string;
  niveauEducation?: string;
  siteRattachement?: string;
  stageType?: string;
  statut?: string;
  taches?: Array<TacheDto>;
  titrePoste?: string;
  type?: string;
}
