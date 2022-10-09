import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  @ViewChild('textarea') element!: ElementRef;

  public code: string = '';

  indent(event: Event) {
    event.preventDefault();
    this.code += '    ';
  }

  resize(event: { width: number, height: number }) {
    this.element.nativeElement.style.width = `${event.width}px`; 
    this.element.nativeElement.style.height = `${event.height}px`;
  }

}
