import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-serviceform',
  imports: [FormsModule],
  templateUrl: './serviceform.html',
  styleUrl: './serviceform.css',
})
export class Serviceform {
  serviceform: {
    customerName: string;
    vehicleNumber: string;
    contactNumber: string;
  } = {
    customerName: '',
    vehicleNumber: '',
    contactNumber: ''
  };
selectedService: string = '';

  onServiceSelect(service: string) {
    this.selectedService = service;
  }
services=[
  {name:'Oil Change', price: 800},
  {name:'Tyre Replacement', price: 3000},
  {name:'Engine Service', price: 5000},
  {name:'Wash', price: 500}
]
partcost=[
  {name:'Air Filter', price: 600},
  {name:'Brake Pads', price: 2500},
  {name:'Spark Plugs', price: 400}
]
partsUsed: string[] = []; 
onPartSelect(part: string) {
  const index = this.partsUsed.indexOf(part); 
}
basetotal: number = 0;
calculateTotal() {
  const service = this.services.find(s => s.name === this.selectedService); 
  if (service) {
    this.basetotal = service.price;
  }
}
onSubmit() {
  this.calculateTotal();
  localStorage.setItem('partsUsed', JSON.stringify(this.partsUsed));
}

ngOnInit() {
  const storedParts = localStorage.getItem('partsUsed');
  if (storedParts) {
    this.partsUsed = JSON.parse(storedParts);
  }
}
}
