import { Component } from '@angular/core';

import { LibraryPage } from '../library/library';
import { AddPage } from '../add/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LibraryPage;
  tab2Root = AddPage;

  constructor() {

  }
}
