import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from './RouterLink';
import { TypographyModule } from '../Typography/index';

@NgModule({
  declarations: [RouterLink],
  exports: [RouterLink],
  imports: [RouterModule, TypographyModule]
})
export class RouterLinkModule {}
