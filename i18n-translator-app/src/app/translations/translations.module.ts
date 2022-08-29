import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationsRoutingModule } from './translations-routing.module';
import { TranslationsComponent } from './translations.component';
import { EditorComponent } from './editor/editor.component';


@NgModule({
  declarations: [
    TranslationsComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    TranslationsRoutingModule
  ]
})
export class TranslationsModule { }
