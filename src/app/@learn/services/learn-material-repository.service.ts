import { Injectable } from '@angular/core';
import { LearnMaterial } from '../model/learn-material';
import { LearnMaterialByClass } from '../model/learn-material-by-class';

@Injectable({
  providedIn: 'root'
})
export class LearnMaterialRepositoryService {

  content: LearnMaterial[] = [];

  constructor() {
    this.content = [
      {
        class: 2,
        title: 'Slabiky',
        description: 'Díky rozeznání slabik se naučíme správně vyslovovat jednotlivá slova.',
        routerLink: 'syllables',
        license: 'Public domain',
        authors: ['Miloš Havlíček'],
        externalLinks: [
          {
            url: 'https://www.mojecestina.cz/article/2016051602-cestina-letem-svetem-jak-rozdelit-slovo-na-slabiky',
            title: 'mojecestina.cz'
          },
        ]
      },
      {
        class: 3,
        title: 'Slovní druhy',
        description: `Určení slovních druhů nám pomáhá pochopit funkci slova v rámci věty.
          Poté co se naučíme určovat slovní druhy, můžeme začít určovat mluvnické kategorie,
          které souvisí se skloňováním.`,
        routerLink: 'verbal-types',
        learnSteps: [
          'Nejprve se naučíme názvy všech slovních druhů tak jak jdou po sobě postupným vyjmenováváním.',
          `Poté si zapamatujeme jejich pořadí. Pořadí později využijeme při označování slovních druhů slov
          ve větě, kdy se nadepíšeme slovní druh formou číslovky nad slovo.`,
          'Ke každému slovnímu druhu si přečteme, jakou má funkci a jak jej poznáme.',
          'Na praktických příkladech si vyzkoušíme určení slovních druhů.'
        ],
        license: 'Public domain',
        authors: ['Miloš Havlíček'],
        externalLinks: [
          {
            url: 'https://www.mojecestina.cz/slovni-druhy',
            title: 'mojecestina.cz'
          },
          {
            url: 'https://www.umimecesky.cz/cviceni-slovni-druhy',
            title: 'umimecesky.cz'
          },
          {
            url: 'https://www.zsbojanov.cz/vstup-do-tridy/a4-trida/cesky-jazyk/slovni-druhy/',
            title: 'zsbojanov.cz'
          },
          {
            url: 'https://www.pravopisne.cz/category/vetne-rozbory/tvaroslovi-morfologie/slovni-druhy/',
            title: 'pravopisne.cz'
          },
        ],
      },
      {
        class: 3,
        title: 'Velká písmena',
        description: 'Základní pravidla kdy píšeme na začátku slova velká a kdy malé písmeno.',
      },
      {
        class: 3,
        title: 'Vyjmenovaná slova',
        description: 'Vyjmenovaná slova nám pomáhají určit kdy se píše i/y.',
      },
      {
        class: 4,
        title: 'Stavba slova',
        description: 'Rozdělení slova na předponu, kořen, příponu a koncovku.',
      },
      {
        class: 4,
        title: 'Základní skladební dvojice',
        description: 'Určení podmětu a přísudku ve větě.',
      },
      {
        class: 4,
        title: 'Infinitiv',
        description: 'Převedení slovesa do infinitivu.',
      },
      {
        class: 5,
        title: 'Vzory podstatných jmen',
        description: `Vzory nám pomáhají se správným skloňováním. Můžeme se tak rozhodnout
        jaký tvar slova je možné v dané situaci použít a případně, jaké i/y máme napsat
        na konci slova.`,
      },
      {
        class: 5,
        title: 'Základní druhy rýmů',
        description: 'Základní terorie rýmování.',
      },
      {
        class: 6,
        title: 'Předpony s- / z-',
        description: 'Správný pravopis slov s předponou s/z.',
      },
      {
        class: 6,
        title: 'Psaní -mě- / -mně-',
        description: '',
      },
      {
        class: 6,
        title: 'Větná skladba',
        description: 'Rozbor věty na jednotlivé větné členy.',
      },
      {
        class: 7,
        title: 'Slovesné kategorie',
        description: 'Určení osoby, čísla, času, rodu a vidu u sloves.',
      },
      {
        class: 8,
        title: 'Druhy souvětí',
        description: 'Rozlišení věty jednočlené, vícečlenné a větného ekvivalentu a určení vztahu mezi větami.',
      },
    ];
  }

  findContentByClasses(): LearnMaterialByClass[] {
    const contentByClasses: LearnMaterialByClass[] = [];
    for (let i = 1; i < 10; i++) {
      const matches = this.content.filter(x => x.class === i);
      if (matches.length) {
        contentByClasses.push({
          class: i,
          content: matches,
        });
      }
    }
    return contentByClasses;
  }

  search(searchTerm: string): LearnMaterial[] {
    const search = searchTerm.trim().toLowerCase();

    return this.content.filter(x =>
      x.title.toLowerCase().search(search) > -1 || x.description.toLowerCase().search(search) > -1
    );
  }

  findOneBy(criteria: Partial<LearnMaterial>) {
    return this.content.find(x => {
      for (const criteriaKey in criteria) {
        if (x.hasOwnProperty(criteriaKey)) {
          if (x[criteriaKey] !== criteria[criteriaKey]) {
            return false;
          }
        } else {
          return false;
        }
      }
      return true;
    });
  }
}
