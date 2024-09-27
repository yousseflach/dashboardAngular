import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CandidatService } from '../services/candidat/candidat.service';
import { apiurl } from '../config';
import { Candidat } from '../Models/candidat';

@Component({
  selector: 'app-ajouter-cv',
  templateUrl: './ajouter-cv.component.html',
  styleUrls: ['./ajouter-cv.component.css']
})
export class AjouterCvComponent {
  uploadForm: FormGroup;
  selectedFile: File | null = null;
  cvInvalid: boolean = false;
  @Input() demandeId="";
  selectedFileName!: string | null;


  constructor(private fb: FormBuilder, private http: HttpClient,private candidatService: CandidatService) {
    this.uploadForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required]
    });
  }

  triggerFileInput() {
    document.getElementById('fileID')?.click();
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.cvInvalid = false;
    }
    const file = event.target.files[0];
    if (file) {
      // Vérifiez ici si le fichier est un PDF ou tout autre validation nécessaire
      if (file.type === 'application/pdf') {
        this.selectedFileName = file.name;
        this.cvInvalid = false; // Réinitialiser le message d'erreur si le fichier est valide
      } else {
        this.selectedFileName = null;
        this.cvInvalid = true; // Afficher un message d'erreur si le fichier n'est pas un PDF
      }
    }
  }

  onSubmit() {
    if (!this.selectedFile) {
      this.cvInvalid = true;
      return;
    }

    const formData = new FormData();
    formData.append('nom', this.uploadForm.get('nom')?.value);
    formData.append('prenom', this.uploadForm.get('prenom')?.value);
    formData.append('email', this.uploadForm.get('email')?.value);
    formData.append('telephone', this.uploadForm.get('telephone')?.value);
    formData.append('cv', this.selectedFile);
    formData.append('demandeId',this.demandeId);

    this.candidatService.ajouterCandidat(formData).subscribe((response: any) => {
      console.log(response);
      window.location.reload();
    }, (error: any) => {
      console.error(error);
      alert('Une erreur est survenue lors de l\'ajout du CV. Veuillez reessayer.');
    });
  }

}
