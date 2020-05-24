import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { faStream } from '@fortawesome/free-solid-svg-icons/faStream';
import XRegExp from 'xregexp';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input() box;
  @Input() debug;
  @Output() @Input() showSteps = false;
  @Output() search: EventEmitter<string> = new EventEmitter();
  faStream = faStream;
  faCaretRight = faCaretRight;

  constructor() {
  }

  ngOnInit(): void {
  }

  onShowSteps(): void {
    this.showSteps = true;
  }

  onHideSteps(): void {
    this.showSteps = false;
  }

  onContinueByResult(): void {
    const match = XRegExp.match(this.box['text'], /(?<=^\s*\\\(\s*)(.*)(?=\s*\\\)\s*$)/gm)[0];
    this.search.emit(match);
  }
}
