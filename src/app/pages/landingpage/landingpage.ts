import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  imports: [],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.css',
})
export class Landingpage {
totalServices: number = 15;
totalRevenue: number = 150000;
urgentServices: number = 5;
normalServices: number = 10;
mostCommonService: string = 'Oil Change';
mostCommonVehicle: string = 'Sedan';
}
