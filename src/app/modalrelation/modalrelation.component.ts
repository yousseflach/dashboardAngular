import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalrelation',
  templateUrl: './modalrelation.component.html',
  styleUrls: ['./modalrelation.component.css']
})
export class ModalrelationComponent {

  constructor(private modalService: NgbModal) { }

  closeModalRelation() {
    const modalRef = this.modalService.dismissAll();
  }

}
