export class Hierarchie {
    id: number;
    commentaire: string;
    demande_id: number;
    datedecreation: Date;
    matricule: string;
    nom: string;
    prenom: string;
    statut: string;

    constructor(
        id: number,
        commentaire: string,
        demande_id: number,
        datedecreation: Date,
        matricule: string,
        nom: string,
        prenom: string,
        statut: string
    ) {
        this.id = id;
        this.commentaire = commentaire;
        this.demande_id = demande_id;
        this.datedecreation = datedecreation;
        this.matricule = matricule;
        this.nom = nom;
        this.prenom = prenom;
        this.statut = statut;
    }

    toString(): string {
        return `TS(id=${this.id}, commentaire=${this.commentaire}, demande_id=${this.demande_id}, ` +
               `datedecreation=${this.datedecreation}, matricule=${this.matricule}, nom=${this.nom}, ` +
               `prenom=${this.prenom}, statut=${this.statut})`;
    }

    display(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Commentaire: ${this.commentaire}`);
        console.log(`Demande ID: ${this.demande_id}`);
        console.log(`Date de Creation: ${this.datedecreation}`);
        console.log(`Matricule: ${this.matricule}`);
        console.log(`Nom: ${this.nom}`);
        console.log(`Prenom: ${this.prenom}`);
        console.log(`Statut: ${this.statut}`);
    }
}