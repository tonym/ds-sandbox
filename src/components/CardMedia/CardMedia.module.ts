import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMedia } from './CardMedia';

@NgModule({
  declarations: [CardMedia],
  exports: [CardMedia],
  imports: [CommonModule]
})
export class CardMediaModule {}
