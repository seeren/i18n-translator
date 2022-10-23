import { KeyValue } from '@angular/common';
import { Component, TrackByFunction } from '@angular/core';

import { CountryService } from './shared/services/country.service';
import { ExtensionService } from './shared/services/extension.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public extensionService: ExtensionService,
    public countryService: CountryService
  ) {}

  public trackExtension(index: number, item: KeyValue<string, string>): string {    
    return `${index}-${item.key}`;
  }

  public trackCountry(index: number, item: KeyValue<string, string>): string {    
    return `${index}-${item.key}`;
  }
}
