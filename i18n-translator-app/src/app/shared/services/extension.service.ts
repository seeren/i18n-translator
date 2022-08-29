import { Injectable } from '@angular/core';

import { Extension } from '../models/extension.enum';

@Injectable({
  providedIn: 'root'
})
export class ExtensionService {

  private extension: Extension = Extension.YAML;

  public extensionList: Record<string, string> = Extension;

  public getExtension(): Extension {
    return this.extension;
  }
  public setExtension(extension: Extension): void {
    this.extension = extension;
  }

  public geExtensionList(): Record<string, string> {
    return this.extensionList;
  }

}
