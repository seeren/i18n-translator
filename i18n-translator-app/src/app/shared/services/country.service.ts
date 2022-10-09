import { Injectable } from '@angular/core';

import { countries } from 'country-flag-icons'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _country: String;

  private _countryList: Record<string, string>;

  constructor() {
    this._country = 'FR';
    this._countryList = countries.reduce((
      previous, current) => ({
      ...previous,
      [current]: getUnicodeFlagIcon(current)
    }), {});
  }

  get countryList(): Record<string, string> {
    return this._countryList;
  }

  get country(): String {
    return this._country;
  }

  set country(country: String) {
    this._country = country;
  }

}
