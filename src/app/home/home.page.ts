import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreCompleto: string = '';
  numeroCarnet: string = '';
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  async loadBirds() {
    this.isLoading = true;
    /* activar spiner para cargar */
    setTimeout(async () => {
      this.isLoading = false;
      await this.presentToast('Datos enviados', 'success');
      this.router.navigate(['/birds']);
    }, 1500);
  }
  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      color,
    });
    await toast.present();
  }
}
