import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent  {
  @ViewChild('foo') element!: ElementRef;

  constructor() { }

  listen () : void {
    console.log(this.element.nativeElement.textContent);
    
  }
}
