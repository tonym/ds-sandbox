import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBaseModule } from '../ButtonBase/index';
import { CardActionArea } from './CardActionArea';

@NgModule({
  declarations: [CardActionArea],
  exports: [CardActionArea],
  imports: [ButtonBaseModule, CommonModule]
})
export class CardActionAreaModule {}
