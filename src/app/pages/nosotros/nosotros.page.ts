import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardContent, IonCardTitle, IonCardTitle, IonCard, IonCardHeader]
})
export class NosotrosPage implements OnInit {
distancia= signal<number>(0);
  constructor(
    private geoService : GeolocationService
  ) { }

 async ngOnInit() {
    const coords= await this.geoService.getCurrentPosition();
    const oficinaLat = 40.4452;
    const oficinaLon = -3.6115;

    this.distancia.set(this.geoService.calcularDistancia(coords.latitude, coords.longitude, oficinaLat, oficinaLon));
    console.log('Distancia calculada:', this.distancia);
  }

}
