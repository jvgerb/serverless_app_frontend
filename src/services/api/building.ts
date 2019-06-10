import ApiBase from './api-base';
import { normalizeParams } from './normalize-params.decorator';
import { BuildingListItem } from './models/building/building-list-item';
import { EntranceListItem } from './models/building/entrance-list-item';
import { Building } from './models/building/building';
import { Entrance } from './models/building/entrance';

export default class extends ApiBase {
  @normalizeParams
  async getBuildingById(buildingId: string) {
    return await this.get(`building/${buildingId}`);
  }

  @normalizeParams
  async getBuildingList(buildingName: string, category: string) {
    const result = await this.get(
      `building/find?category=${category}&name=${buildingName}`
    );
    return result.map((x: any) => new BuildingListItem().map(x));
  }

  @normalizeParams
  async getEntranceList(street: string, entranceId: string) {
    const result = await this.get(
      `building_entrance/find?street=${street}&id=${entranceId}`
    );
    return result.map((x: any) => new EntranceListItem().map(x));
  }

  async postBuilding(data: Building) {
    return await this.post(`building`, data.mapOut());
  }

  async postEntrance(data: Entrance) {
    if (!data.buildingId) throw 'No Building ID';
    const building = await this.getBuildingById(data.buildingId);
    data.buildingInfo = building;
    return await this.post(`building_entrance`, data.mapOut());
  }
}
