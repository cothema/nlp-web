import { Component, OnInit } from '@angular/core';

interface LearnContent {
  class: number;
  title: string;
  description?: string;
  descriptionNextSteps?: string;
}

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  content: LearnContent[] = [];
  contentByClasses: {
    class: number;
    content: LearnContent[];
  }[] = [];
  search: string;
  searchContent: LearnContent[] = [];

  constructor() {
    this.content.push({
      class: 2,
      title: 'Slabiky',
      description: 'Díky rozeznání slabik se naučíme správně vyslovovat jednotlivá slova.'
    });
    this.content.push({
      class: 3,
      title: 'Slovní druhy',
      description: 'Určení slovních druhů nám pomáhá pochopit funkci slova v rámci věty.',
      descriptionNextSteps: 'Poté co se naučíme určovat slovní druhy, můžeme začít určovat mluvnické kategorie, které souvisí se skloňováním.'
    });
    this.content.push({
      class: 3,
      title: 'Velká písmena',
      description: 'Základní pravidla kdy píšeme na začátku slova velká a kdy malé písmeno.',
    });
    this.content.push({
      class: 3,
      title: 'Vyjmenovaná slova',
      description: 'Vyjmenovaná slova nám pomáhají určit kdy se píše i/y.',
    });
    this.content.push({
      class: 4,
      title: 'Stavba slova',
      description: 'Rozdělení slova na předponu, kořen, příponu a koncovku.',
    });
    this.content.push({
      class: 4,
      title: 'Základní skladební dvojice',
      description: 'Určení podmětu a přísudku ve větě.',
    });
    this.content.push({
      class: 4,
      title: 'Infinitiv',
      description: 'Převedení slovesa do infinitivu.',
    });
    this.content.push({
      class: 5,
      title: 'Vzory podstatných jmen',
      description: 'Vzory nám pomáhají se správným skloňováním. Můžeme se tak rozhodnout jaký tvar slova je možné v dané situaci použít a případně, jaké i/y máme napsat na konci slova.'
    });
    this.content.push({
      class: 6,
      title: 'Předpony s/z',
      description: 'Správný pravopis slov s předponou s/z.',
    });
    this.content.push({
      class: 6,
      title: 'Větná skladba',
      description: 'Rozbor věty na jednotlivé větné členy.',
    });
    this.content.push({
      class: 7,
      title: 'Slovesné kategorie',
      description: 'Určení osoby, čísla, času, rodu a vidu u sloves.',
    });
    this.content.push({
      class: 8,
      title: 'Druhy souvětí',
      description: 'Rozlišení věty jednočlené, vícečlenné a větného ekvivalentu a určení vztahu mezi větami.',
    });
  }

  ngOnInit(): void {
    this.contentByClasses = [];
    for (let i = 1; i < 10; i++) {
      const matches = this.content.filter(x => x.class === i);
      if (matches.length) {
        this.contentByClasses.push({
          class: i,
          content: matches,
        });
      }
    }
  }

  onSearch() {
    const search = this.search.trim().toLowerCase();

    if (search.length === 0) {
      this.search = undefined;
      this.searchContent = [];
      return;
    }

    this.searchContent = this.content.filter(x =>
      x.title.toLowerCase().search(search) > -1 || x.description.toLowerCase().search(search) > -1
    );
  }

}
