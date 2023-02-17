import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './Button';
import { ButtonBaseModule } from '../ButtonBase/index';
import { SvgIconModule } from '../SvgIcon/index';

@NgModule({
  declarations: [Button],
  exports: [Button],
  imports: [ButtonBaseModule, CommonModule, SvgIconModule]
})
export class ButtonModule {}
