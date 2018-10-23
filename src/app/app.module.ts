import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { RegisterPage } from '../pages/register/register';
import { NewTaskModalPage } from '../pages/new-task-modal/new-task-modal';
import { DetailsPage } from '../pages/details/details';

import { ImagePicker } from '@ionic-native/image-picker';


import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirebaserestProvider } from '../providers/firebaserest/firebaserest';
import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyCrBtwwRsA85vNXx0ZF2mTvKdh7vWoo-QI",
  authDomain: "ionictest-173a8.firebaseapp.com",
  databaseURL: "https://ionictest-173a8.firebaseio.com",
  projectId: "ionictest-173a8",
  storageBucket: "ionictest-173a8.appspot.com",
  messagingSenderId: "77549745455"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    RegisterPage,
    NewTaskModalPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    RegisterPage,
    NewTaskModalPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaserestProvider
  ]
})
export class AppModule {}
