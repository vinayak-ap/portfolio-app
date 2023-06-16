import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
    carsInfo = {};

    constructor(private vehicleService: VehicleService) { }

    ngOnInit(): void {
        // this.carsInfo = this.vehicleService.displayCarsInfo();
    }
}
