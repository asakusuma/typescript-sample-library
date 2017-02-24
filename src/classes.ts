import {
  ReadMeatDish,
  GenericDish,
  Doneness
} from './interfaces';

export enum SteakCut {
  RibEye,
  Filet,
  Sirloin
}

export class Burger implements ReadMeatDish, GenericDish {
  doneness: Doneness;
  patties: number;
  glutenFree: boolean;
  vegan: boolean;
  constructor() {
    this.vegan = false;
    this.glutenFree = false;
  }
}

export class Steak implements ReadMeatDish {
  doneness: Doneness;
  cut: SteakCut;
  constructor(cut: SteakCut) {
    this.doneness = Doneness.Raw;
  }
  cook(doneness: Doneness) {
    this.doneness = doneness;
    return this;
  }
}

export class LettuceBurger extends Burger {
  constructor() {
    super();
    this.glutenFree = true;
  }
}