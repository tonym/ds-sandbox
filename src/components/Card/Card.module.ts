import { NgModule } from '@angular/core';
import { Card } from './Card';
import { PaperModule } from '../Paper/index';

@NgModule({
  declarations: [Card],
  exports: [Card],
  imports: [PaperModule]
})
export class CardModule {}
