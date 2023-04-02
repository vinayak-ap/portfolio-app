import { Injectable } from '@angular/core';
import { arrBikesInfo } from 'src/utilities/bikes-info';
import { arrCarsInfo } from 'src/utilities/cars-info';

@Injectable({
    providedIn: 'root',
})
export class VehicleService {
    constructor() {}

    displayBikesInfo(): {} {
        return arrBikesInfo;
    }

    displayCarsInfo(): {} {
        return arrCarsInfo;
    }
}
