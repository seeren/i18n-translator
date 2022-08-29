import { Injectable } from '@angular/core';

import { countries } from 'country-flag-icons'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private country: String;

  private countryList: Record<string, string>;

  constructor() {
    this.country = 'FR';
    this.countryList = countries.reduce((
      previous, current) => ({ ...previous, [current]: getUnicodeFlagIcon(current) }),
      {}
    );
  }
  public getCountry(): String {
    return this.country;
  }

  public setCountry(country: String): void {
    this.country = country;
  }

  public getCountryList(): Record<string, string> {
    return this.countryList;
  }

}
