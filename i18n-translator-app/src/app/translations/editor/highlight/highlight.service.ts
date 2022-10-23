import { ElementRef, Injectable } from '@angular/core';

import 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-xml-doc';
import 'prismjs/components/prism-markup-templating';

declare var Prism: any;

@Injectable({
  providedIn: 'root',
})
export class HighlightService {
  public highlightElement(elementRef: ElementRef): void {
    return Prism.highlightElement(elementRef.nativeElement);
  }
}
