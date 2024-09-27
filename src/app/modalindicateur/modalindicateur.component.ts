import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalindicateur',
  templateUrl: './modalindicateur.component.html',
  styleUrls: ['./modalindicateur.component.css']
})
export class ModalindicateurComponent {
  constructor(private modalService: NgbModal) { }

  closeModalIndicateur() {
    const modalRef = this.modalService.dismissAll();
  }
  
}
