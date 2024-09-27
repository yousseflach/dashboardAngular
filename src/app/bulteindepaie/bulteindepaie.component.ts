import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FiltreformComponent } from '../filtreform/filtreform.component';
import { interval } from 'rxjs';
import { CADService } from '../services/bulletindepaie/CAD/cad.service';

@Component({
  selector: 'app-bulteindepaie',
  templateUrl: './bulteindepaie.component.html',
  styleUrls: ['./bulteindepaie.component.css']
})
export class BulteindepaieComponent {
  salairenet: number = 0;
  salaire: number = 0;
  salairedebase: number = 0;
  choix: { SalaireNet: number, anciennte: number, type: string, statut: string,representation: number,transport: number,logement: number } = { SalaireNet: 13000, anciennte: 0, type: "cad", statut: "siege",representation:0,transport:500,logement:1000};
  bulletin: any = {
    salaireNet: 0,
    retenueCnss: 0,
    retenueCmr: 0,
    representation: 0,
    transport: 500,
    salaireNetImposable: 0,
    ir: 0,
    anciennte: 0,
    logement: 1000,
    amo: 0,
    salairedebase: 0
  }

  chargepatronal: any = {
    cnss: 0,
    cmr: 0,
    amo: 0,
    ir: 0,
    RT: 0,
    CP: 0,
    CTE: 0,
    total: 0
  
  };


  
  constructor(private modalService: NgbModal, private Bulletin: CADService) {
    const modalRef = this.modalService.open(FiltreformComponent);
    //modalRef.componentInstance.name = 'World';
    this.modalService.dismissAll();
  }

  // Fonction de calcul du salaire net
  getlogement() {
    if (this.choix.type === 'csu') {
      this.choix.logement = 5000;
    }
    else {
      this.choix.logement = this.choix.type === 'cad' ? 1000 : 100;
    }
    return this.choix.logement;
  }

  calculerSalairedebase(salaire_net: number, anciennte: number, type: string, statut: string, representation: number, transport: number, logement: number): any {
    let salairedebase = salaire_net * 2;
    let salairenetprovisoire = this.Bulletin.calculerBulletin(salairedebase, anciennte, type, statut, representation, transport, logement).salaireNet;
    const intervalle1 = salaire_net - 0.01;
    const intervalle2 = salaire_net + 0.01;
    while (salairenetprovisoire < intervalle1 || salairenetprovisoire > intervalle2) {
      const diff = salairenetprovisoire - salaire_net;
      salairedebase -= diff;
      salairenetprovisoire = this.Bulletin.calculerBulletin(salairedebase, anciennte, type, statut, representation, transport, logement).salaireNet;
    }
    this.bulletin = this.Bulletin.calculerBulletin(salairedebase, anciennte, type, statut, representation, transport, logement);
    this.bulletin.salairedebase = salairedebase;
    this.choix.logement = this.bulletin.logement;
    return this.bulletin.salairedebase;

  }

  getCTE(): number {
    const bloc1 =(this.bulletin.salairedebase+this.bulletin.anciennte+this.bulletin.logement)*12;
    this.chargepatronal.cnss =(this.bulletin.retenueCnss * 12)*2+0.0985* bloc1 ;
    this.chargepatronal.cmr = ((this.bulletin.retenueCmr * 12)/6) * 7.80;
    if(this.choix.statut =='siege')
    this.chargepatronal.amo = bloc1 * 0.0639;
    else
    this.chargepatronal.amo = bloc1 * 0.0225;

    this.chargepatronal.ir = bloc1 * 0.0119;
    this.chargepatronal.RT =bloc1 +(this.bulletin.transport+this.bulletin.representation)*12;
    this.chargepatronal.CP = this.chargepatronal.cnss + this.chargepatronal.cmr + this.chargepatronal.amo + this.chargepatronal.ir ;
     this.chargepatronal.CTE = this.chargepatronal.RT + this.chargepatronal.CP;
     return this.chargepatronal.CTE;
  }


}
