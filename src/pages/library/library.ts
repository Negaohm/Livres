import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BookPage } from '../book/book';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage {

  constructor(public navCtrl: NavController) {
  }

  displayBook(){
    this.navCtrl.push(BookPage);
  }
}
