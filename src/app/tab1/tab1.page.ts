import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery";

  items =[
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Eggs",
      quantity: 4
    },
    {
      name: "Coffee",
      quantity: 8
    },
    {
      name: "Oranges",
      quantity: 2
    },
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertController:AlertController ) {}

  /** This function removes grocery items from the list */
  removeItem(item, index)
  {
  console.log("Removing item...", item, index);
  const toast = this.toastCtrl.create({
    message: 'Removing Item - ' +index+ "...",
    duration: 3000
  });

  this.items.splice(index, 1);
  }
 /** This function prompts you to add grocery items to the list */
  addItem()
  {
    console.log("Adding item");
    this.showAddItemPrompt();
  }
 /** This function prompts the user to add the grocery item and quantity */
  async showAddItemPrompt() {
    const alert = await this.alertController.create({
      header: 'Add Grocery Item',
      message: "Please enter Grocery item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Saved Clicked', item);
            this.items.push(item)
          }
        }
      ]
    });

    await alert.present();
  }
}



