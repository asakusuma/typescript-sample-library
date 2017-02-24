export enum Doneness {
  Raw,
  Rare,
  MediumRare,
  Medium,
  MediumWell,
  WellDone
}

export interface GenericDish {
  glutenFree: boolean;
  vegan: boolean;
}

export interface ReadMeatDish {
  doneness: Doneness;
}