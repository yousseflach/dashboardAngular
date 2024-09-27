export class Tache {
    id: string;
    etape: string;
    dateDeDebut: Date;
    

    constructor(id: string, etape: string, dateDeDebut: Date) {
        this.id = id;
        this.etape = etape;
        this.dateDeDebut = dateDeDebut;
    }
}
