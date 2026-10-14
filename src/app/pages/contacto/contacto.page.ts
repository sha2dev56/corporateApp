import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonItem, 
  IonInput, 
  IonTextarea, 
  IonButton, 
  IonText 
} from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonItem, 
    IonInput, 
    IonTextarea, 
    IonButton, 
    IonText, 
    CommonModule, 
    FormsModule
  ]
})
export class ContactoPage implements OnInit {
  // Variables del formulario
  correo: string = '';
  mensaje: string = '';
  enviado: boolean = false;

  constructor() { }

  ngOnInit() {
  }
enviar() {
    if (!this.correo || !this.mensaje) {
      console.log('Por favor, completa todos los campos.');
      return;
    }

    this.enviado = true;
  }
}