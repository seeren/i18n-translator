import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationsRoutingModule } from './translations-routing.module';
import { TranslationsComponent } from './translations.component';
import { EditorComponent } from './editor/editor.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TranslationsComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslationsRoutingModule
  ],
})
export class TranslationsModule { }
