import { Injectable } from '@angular/core';
import { DoorService } from './door.service';
import { WheelService } from './wheel.service';
import { EngineService } from './engine.service';

@Injectable()
export class CarService {

  constructor(
    private wheel: WheelService,
    private door: DoorService,
    private engine: EngineService,
  ) { }

  inspect() {
    console.log(this.wheel, this.door, this.engine);
  }

}
