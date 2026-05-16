import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Serviceform {
  serviceform = {
    customerName: '',
    vehicleNumber: '',
    contactNumber: ''
  };

}
