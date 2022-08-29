import { Component } from '@angular/core';

import { CountryService } from './shared/services/country.service';
import { ExtensionService } from './shared/services/extension.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public extensionService: ExtensionService,
    public countryService: CountryService) { }

}
