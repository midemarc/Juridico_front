import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Direction, Documentation, Result, Tag, TagType, Organisation } from './results';

@Injectable()
export class ResultsService {

  private results: Result[];

  constructor(private httpClient: HttpClient) {
    const type_svc: TagType = { ttid: 3, nom: 'Service' };
    const vf: Tag = { tid: 1, nom: 'Valeurs féministes', tag_type: type_svc};
    const amaj: Tag = { tid: 2, nom: 'Accepte mandats d\'aide juridique', tag_type: type_svc };
    const directions_r1: Direction = {
      resid: 1,
      description: 'Vous avez reçu un “Avis d\'augmentation de loyer et de modification d\'une autre condition du bail”. ' +
      'Cet avis est nécessaire lorsque votre propriétaire veut modifier les conditions de votre bail, telle que le montant du loyer.',
      tags: [
        // vf, amaj
      ],
      commentaires: '',
      variables: '',
      quand: '',
      type_classe: ''
    };
    const direction2_r1: Direction = {
      resid: 2,
      description: 'Selon l\'information que vous nous avez fourni, l\'avis de votre propriétaire respecte les délais ' +
      '(envoyé entre 3 et 6 mois avant la fin du bail).',
      tags: [],
      commentaires: '',
      variables: '',
      quand: '',
      type_classe: ''
    };

    const doc219: Documentation = {
      resid: 0,
      description: 'Vous êtes tranquillement assis sur votre balcon par un beau soir du mois de mai ' +
      'lorsque votre propriétaire vient vous rendre visite. Il vous annonce qu\'à partir du 1er juillet, ' +
      'vous devrez payer 630 $ au lieu de 580 $ pour votre logement.',
      tags: [
        // vf, amaj
      ],
      commentaires: '',
      type_classe: '',
      nom: 'Le renouvellement de bail et la hausse de loyer',
      url: 'https://www.educaloi.qc.ca/capsules/le-renouvellement-de-bail-et-la-hausse-de-loyer',
      artid_educaloi: 373,
      categorie_educaloi: 'Habitation',
      nom_source: 'Educaloi'
    };

    const clp: Organisation = {
      nom: 'Comité de Logement du Plateau Mont-Royal',
      description: 'Le CLPMR a pour mission de défendre les droits des locataires du Plateau Mont-Royal ' +
      'et de promouvoir le développement de logements sociaux comme une alternative au marché locatif privé.',
      url: 'http://clpmr.com/',
      code_postal: 'H2J2W9',
      lattitude: null,
      longitude: null,
      adresse: '4450, St-Hubert, Montréal, QC',
      courriel: 'clplateau@clpmr.com',
      telephone: '(514) 527-3495',
      telecopieur: '(514) 527-6653',
      appartenance: null,
      type_classe: null,
      commentaires: '',
      resid: 35,
      tags: []
    };

    const result1: Result = {
      directions: [
        directions_r1, direction2_r1
      ],
      documentations: [
        doc219
      ],
      organisations: [
        clp
      ]
    };
    this.results = [
      result1
    ];
  }

  getResults(): Promise<Result[]> {
    return of(this.results).toPromise();
  }

}
