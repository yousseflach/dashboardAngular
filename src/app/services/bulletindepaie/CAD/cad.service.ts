import { Injectable } from '@angular/core';
import { BulletinDePaie } from '../modalbulletin';
import { Block } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CADService {
  bulletindepaie: BulletinDePaie = {
    salaireNet: 0,
    retenueCnss: 0,
    retenueCmr: 0,
    representation: 0,
    transport: 500,
    fp: 0,
    salaireNetImposable: 0,
    taux: 0,
    md: 0,
    ir: 0,
    anciennte: 0,
    logement: 0,
    amo: 0
  }
  bulletin: BulletinDePaie = {
    salaireNet: 0,
    retenueCnss: 0,
    retenueCmr: 0,
    representation: 0,
    transport: 500,
    fp: 0,
    salaireNetImposable: 0,
    taux: 0,
    md: 0,
    ir: 0,
    anciennte: 0,
    logement: 0,
    amo: 0
  }
  cnss: number = 4.48 / 100;
  cimr: number = 6 / 100;
  amo: number = 2.26 / 100;
  taux: number = 0;
  md: number = 0;


  constructor() { }

  calculertauxanciennte(anciennte: number): number {
    if (anciennte >= 2 && anciennte < 5) {
      return 0.05;
    } else if (anciennte >= 5 && anciennte < 12) {
      return 0.1;
    } else if (anciennte >= 12 && anciennte < 20) {
      return 0.15;
    } else if (anciennte >= 20 && anciennte < 25) {
      return 0.2;
    } else if (anciennte >= 25) {
      return 0.25;
    } else {
      return 0;
    }
  }

  verifierTauxSalaireImposable(salaireImposable: number): number {
    if (salaireImposable >= 0 && salaireImposable <= 2500) {
      return 0;
    } else if (salaireImposable >= 2501 && salaireImposable <= 4166) {
      return 0.1;
    } else if (salaireImposable >= 4167 && salaireImposable <= 5000) {
      return 0.2;
    } else if (salaireImposable >= 5001 && salaireImposable <= 6666) {
      return 0.3;
    } else if (salaireImposable >= 6667 && salaireImposable <= 15000) {
      return 0.34;
    } else if (salaireImposable >= 15001) {
      return 0.38;
    } else {
      return 0;
    }
  }

  calculerMontantDeductionSalaireNetImposable(salaireNetImposable: number): number {
    if (salaireNetImposable <= 2500) {
      return 0;
    } else if (salaireNetImposable >= 2501 && salaireNetImposable <= 4166) {
      return 250;
    } else if (salaireNetImposable >= 4167 && salaireNetImposable <= 5000) {
      return 666.67;
    } else if (salaireNetImposable >= 5001 && salaireNetImposable <= 6666) {
      return 1166.67;
    } else if (salaireNetImposable >= 6667 && salaireNetImposable <= 15000) {
      return 1433.33;
    } else
      return 2033.33;
  }

  calculateResult(sum: number): number {
    if (sum <= 6500) {
      return sum * 0.35;
    } else {
      const twentyFivePercent = sum * 0.25;
      return twentyFivePercent > 2916.67 ? 2916.67 : twentyFivePercent;
    }
  }



  // Calcul du salaire net
  calculerBulletin(salaireDeBase: number, anciennteSalaire: number, type: string, statut: string, representation: number, transport: number, logement: number): any {

    this.bulletin.transport = transport;

    if (type === 'csu') {
      statut = 'filliale';
      this.bulletin.transport = 0;
    }
    this.bulletin.logement = logement;







    if (statut === 'cadadjoint')
      this.bulletin.transport = 0;

    this.bulletin.anciennte = this.calculertauxanciennte(anciennteSalaire) * salaireDeBase;

    const salaireBrut: number = salaireDeBase + this.bulletin.logement + this.bulletin.anciennte;
    // bloc 2
    if (salaireBrut >= 6000) {
      this.bulletin.retenueCnss = 6000 * 4.48 / 100;
    } else {
      this.bulletin.retenueCnss = salaireBrut * 4.48 / 100;
    }
    this.bulletin.retenueCmr = salaireBrut * 0.06;

    this.bulletin.amo = 0;
    if (statut === 'filliale' || statut === 'fillialePremierEmploi') {
      this.bulletin.amo = salaireBrut * 2.26 / 100;
    }

    this.bulletin.fp = this.calculateResult(salaireBrut);
    // bloc 3
    this.bulletin.salaireNetImposable = salaireBrut - this.bulletin.retenueCnss - this.bulletin.retenueCmr - this.bulletin.amo - this.bulletin.fp;
    this.taux = this.verifierTauxSalaireImposable(this.bulletin.salaireNetImposable);
    this.md = this.calculerMontantDeductionSalaireNetImposable(this.bulletin.salaireNetImposable);
    this.bulletin.ir = this.bulletin.salaireNetImposable * this.taux - this.md;
    // bloc 4
    if (statut === 'premieremploi' || statut === 'fillialePremierEmploi') {
      this.bulletin.ir = 0;
    }


    if (type === 'mait') {
      this.bulletin.representation = 0;
    }
    else if (representation > 0 && representation <= salaireDeBase * 0.1)
      this.bulletin.representation = representation;
    else
      this.bulletin.representation = salaireDeBase * 0.1;


    this.bulletin.salaireNet = salaireBrut - (this.bulletin.retenueCnss + this.bulletin.retenueCmr + this.bulletin.ir + this.bulletin.amo) + this.bulletin.representation + this.bulletin.transport;
    return this.bulletin;
  }


  /*
    calculersalairenet(salaireDeBase: number, anciennte: number, type: string, statut: string): any {
      if (type === 'cad') {
        if (statut === 'siege') {
         this.bulletin.anciennte = this.calculertauxanciennte(anciennte) * salaireDeBase;
          this.bulletin.logement = 1000;
          const salaireBrut: number = salaireDeBase + this.bulletin.logement + this.bulletin.anciennte;
          // bloc 2
          if (salaireBrut >= 6000) {
            this.bulletin.retenueCnss = 268.80;
          } else {
            this.bulletin.retenueCnss = salaireBrut * 4.48 / 100;
          }
          this.bulletin.retenueCmr = salaireBrut * 6.0 / 100;
  
          this.bulletin.amo = salaireBrut * (2.26 / 100);
          
          this.bulletin.fp = this.calculateResult(salaireBrut);
          // bloc 3
          this.bulletin.salaireNetImposable = salaireBrut - this.bulletin.retenueCnss - this.bulletin.retenueCmr - this.bulletin.fp- this.bulletin.amo;
          this.taux = this.verifierTauxSalaireImposable(this.bulletin.salaireNetImposable);
          this.md = this.calculerMontantDeductionSalaireNetImposable(this.bulletin.salaireNetImposable);
          this.bulletin.ir = this.bulletin.salaireNetImposable * this.taux - this.md;
          // bloc 4
          this.bulletin.representation = salaireDeBase * 0.1;
          this.bulletin.salaireNet = salaireBrut - (this.bulletin.retenueCnss + this.bulletin.retenueCmr + this.bulletin.ir+this.bulletin.amo) + this.bulletin.representation + this.bulletin.transport;
          return this.bulletin;
        }
      }
    }*/

}