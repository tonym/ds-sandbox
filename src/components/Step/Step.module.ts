import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step } from './Step';

@NgModule({
  declarations: [Step],
  exports: [Step],
  imports: [CommonModule]
})
export class StepModule {}
