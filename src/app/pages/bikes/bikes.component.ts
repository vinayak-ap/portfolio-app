import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
    selector: 'app-bikes',
    templateUrl: './bikes.component.html',
    styleUrls: ['./bikes.component.css'],
})
export class BikesComponent implements OnInit {
    bikesInfo = {};

    constructor(private vehicleService: VehicleService) { }

    ngOnInit(): void {
        // this.bikesInfo = this.vehicleService.displayBikesInfo();
    }
}
