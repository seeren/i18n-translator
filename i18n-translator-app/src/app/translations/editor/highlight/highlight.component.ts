import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { HighlightService } from './highlight.service';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements AfterViewInit {

  @ViewChild('highlight') element!: ElementRef;

  @Input() code: string | null = null;

  @Input() language: string | null = null;

  constructor(private highlightService: HighlightService) { }

  ngAfterViewInit() {
    if (this.code && this.language) {
      this.highlight();
    }
  }

  ngOnChanges(changes: any): void {
    if (this.element && changes?.code) {
      this.element.nativeElement.textContent = this.code;
      this.highlight();
    }
  }

  highlight(): void {
    this.highlightService.highlightElement(this.element);
  }

}
