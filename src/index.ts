import {
  Steak,
  SteakCut
} from './classes';
import { Doneness } from './interfaces';
export * from './classes';

export function cookSteak(cut: SteakCut, doneness: Doneness) {
  return new Steak(cut).cook(doneness);
}