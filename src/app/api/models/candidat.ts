/* tslint:disable */
/* eslint-disable */
import { Demande } from '../models/demande';
export interface Candidat {
  commentaire?: string;
  cvPath?: string;
  demande?: Demande;
  email?: string;
  id?: string;
  nom?: string;
  prenom?: string;
  statutSelection?: 'CHOISI' | 'EN_ATTENTE' | 'REJETE';
  telephone?: string;
}
