import { Input } from '@angular/core';
import { Classes } from '../../types/index';
import { arrayify } from '../../helpers/index';

type ClassNameProp = string | string[];

export interface GroundProps {
  classes?: Classes;
  className?: ClassNameProp;
}

export class Ground {
  @Input('className')
  set className(value: ClassNameProp) {
    this._className = arrayify(value).join(' ');
  }
  get className(): ClassNameProp {
    return this._className;
  }

  @Input('classes')
  set classes(value: Classes) {
    this._classes = { ...this._classes, ...value };
  }
  get classes(): Classes {
    return this._classes;
  }

  private _classes: Classes = {};
  private _className: ClassNameProp = '';

  public composedClasses = '';
}
