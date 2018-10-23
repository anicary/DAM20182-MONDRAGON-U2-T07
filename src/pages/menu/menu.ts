import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController  } from 'ionic-angular';
import { FirebaserestProvider } from '../../providers/firebaserest/firebaserest';
import { HomePage } from '../home/home';
import { DetailsPage } from '../details/details';
import { NewTaskModalPage } from '../new-task-modal/new-task-modal';

/**
* Generated class for the MenuPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  items: Array<any>;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private firebaseService: FirebaserestProvider,
     private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  ionViewWillEnter(){
    this.getData();
  }
  getData(){
    this.firebaseService.getTasks()
    .then(tasks => {
      this.items = tasks;
    })
  }
  viewDetails(id, item){
    let data = {
      title: item.title,
      description: item.description,
      image: item.image,
      id: id
    }
    this.navCtrl.push(DetailsPage, {
      data: data
    })
  }
  openNewUserModal(){
    let modal = this.modalCtrl.create(NewTaskModalPage);
    modal.onDidDismiss(data => {
      this.getData();
    });
    modal.present();
  }

  logout(){
    this.firebaseService.doLogout()
    .then(res => {
      this.navCtrl.push(HomePage);
    })
  }

}
