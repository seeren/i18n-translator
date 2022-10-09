import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

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

  @Output('area') area: EventEmitter<{
    width: number,
    height: number
  }> = new EventEmitter()

  constructor(private highlightService: HighlightService) { }

  ngAfterViewInit() {
    this.code && this.language && this.highlight();
  }

  ngOnChanges(changes: any): void {
    this.element && changes?.code && this.highlight();
  }

  highlight(): void {
    this.element.nativeElement.textContent = this.code
    this.highlightService.highlightElement(this.element);
    this.area.emit({
      width: this.element.nativeElement.offsetWidth,
      height: this.element.nativeElement.offsetHeight,
    });
  }

}
