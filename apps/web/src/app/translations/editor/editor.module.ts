import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorComponent } from './editor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HighlightService } from './highlight/highlight.service';
import { HighlightComponent } from './highlight/highlight.component';

@NgModule({
  declarations: [
    EditorComponent, 
    HighlightComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [EditorComponent],
  providers: [HighlightService],
})
export class EditorModule {}
