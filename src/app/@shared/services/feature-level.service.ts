import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { StorageKeys } from "../../@app/enums/storage-keys";
import { LocalStorageService } from "../../@app/services/storage/local-storage";

@Injectable({
  providedIn: "root"
})
export class FeatureLevelService {

  levelNone = 0; // Feature is hidden for everyone
  levelDev = 10; // Feature is visible only for developers
  levelBeta = 20; // Feature is visible for beta testers
  levelProd = 30; // Feature is visible for all

  private privCurrentLevel;

  constructor(
    private storage: LocalStorageService,
  ) {
    const levelInStorage = this.currentLevelInStorage;
    this.privCurrentLevel = (levelInStorage !== null) ? levelInStorage : this.defaultLevel;
  }

  get currentLevel(): number {
    return this.privCurrentLevel;
  }

  set currentLevel(value: number) {
    if ([this.levelDev, this.levelBeta, this.levelProd].includes(value)) {
      this.storage.store(StorageKeys.featureLevelKey, value.toString());
      this.privCurrentLevel = value;
    } else {
      console.error("Invalid value!");
    }
  }

  private get defaultLevel(): number {
    if (environment.hasOwnProperty("staging") && environment["staging"] === true) {
      return this.levelBeta;
    } else if (environment.hasOwnProperty("production") && environment["production"] === false) {
      return this.levelDev;
    }
    return this.levelProd;
  }

  private get currentLevelInStorage(): number | null {
    const storageValue = this.storage.get(StorageKeys.featureLevelKey);

    return (storageValue !== null) ? +storageValue : null;
  }

  isAvailable(requiredMinimumLevel: number): boolean {
    return requiredMinimumLevel >= this.privCurrentLevel;
  }
}
