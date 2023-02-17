import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Badge } from './Badge';

@NgModule({
  declarations: [Badge],
  exports: [Badge],
  imports: [CommonModule]
})
export class BadgeModule {}
