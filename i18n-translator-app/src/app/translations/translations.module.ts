import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslationsRoutingModule } from './translations-routing.module';
import { TranslationsComponent } from './translations.component';
import { SharedModule } from '../shared/shared.module';
import { EditorModule } from './editor/editor.module';

@NgModule({
  declarations: [
    TranslationsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    EditorModule,
    TranslationsRoutingModule
  ],
})
export class TranslationsModule { }
