import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorComponent } from './editor/editor.component';
import { TranslationsComponent } from './translations.component';

const routes: Routes = [
  {
    path: '',
    component: TranslationsComponent,
    children: [
      {
        path: '',
        component: EditorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TranslationsRoutingModule {}
