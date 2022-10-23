import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [CommonModule],
  exports: [FormsModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule],
})
export class SharedModule {}
