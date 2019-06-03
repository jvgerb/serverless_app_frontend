import ApiBase from './api-base';
import { normalizeParams } from './normalize-params.decorator';
import { BuildingListItem } from './models/building/building-list-item';
import { EntranceListItem } from './models/building/entrance-list-item';

export default class extends ApiBase {
  @normalizeParams
  async getBuildingList(buildingName: string, category: string) {
    const result = await this.get(
      `building/find?category=${category}&name=${buildingName}`
    );
    return result.map((x: any) => new BuildingListItem().map(x));
  }

  @normalizeParams
  async getEntranceList(streetNumber: string, entranceId: string) {
    const result = await this.get(
      `building_entrance/find?street=${streetNumber}&id=${entranceId}`
    );
    return result.map((x: any) => new EntranceListItem().map(x));
  }
}
