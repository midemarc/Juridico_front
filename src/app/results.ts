export class Result {
    directions: Direction[];
    documentations: Documentation[];
    organisations: Organisation[];
}

export class TagType {
    ttid: number;
    nom: string;
}

export class Tag {
    tid: number;
    nom: string;
    tag_type: TagType;
}

export class Ressource {
    resid: number;
    description: string;
    tags: Tag[];
    commentaires: string;
    type_classe: string;
}

// Recommendation
export class Direction extends Ressource {
    variables: string;
    quand: string;
}

export class Organisation extends Ressource {
    nom: string;
    url: string;
    code_postal: string;
    lattitude: number;
    longitude: number;
    adresse: string;
    courriel: string;
    appartenance: string;
    telephone: string;
    telecopieur: string;
    // heures_ouverture: string;
}

export class Documentation extends Ressource {
    nom: string;
    url: string;
    artid_educaloi: number;
    categorie_educaloi: string;
    nom_source: string;
}
