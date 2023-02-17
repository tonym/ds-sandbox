import { NgModule } from '@angular/core';
import { IconButton } from './IconButton';
import { ButtonBaseModule } from '../ButtonBase/index';
import { SvgIconModule } from '../SvgIcon/index';

@NgModule({
  declarations: [IconButton],
  exports: [IconButton],
  imports: [ButtonBaseModule, SvgIconModule]
})
export class IconButtonModule {}
