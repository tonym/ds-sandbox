import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperModule } from '../Paper/index';
import { StepModule } from '../Step/index';
import { Stepper } from './Stepper';

@NgModule({
  declarations: [Stepper],
  exports: [Stepper],
  imports: [CommonModule, PaperModule, StepModule]
})
export class StepperModule {}
