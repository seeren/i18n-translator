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
}
