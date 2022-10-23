import { Injectable } from '@angular/core';

import { Extension } from '../models/extension.enum';

@Injectable({
  providedIn: 'root',
})
export class ExtensionService {
  private _extension: Extension = Extension.YAML;

  public _extensionList: Record<string, string> = Extension;

  get extensionList(): Record<string, string> {
    return this._extensionList;
  }

  get extension(): Extension {
    return this._extension;
  }

  set extension(extension: Extension) {
    this._extension = extension;
  }
}
