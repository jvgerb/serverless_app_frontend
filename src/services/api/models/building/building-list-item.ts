export class BuildingListItem {
  data: any;

  buildingId?: string;
  buildingName?: string;
  category?: string;
  year?: string;
  numberOfEntrances?: string;
  numberOfFloors?: string;
  numberOfApartments?: string;

  map(o: any) {
    this.data = o;

    this.buildingId = o.building_id;
    this.buildingName = o.building_name;
    this.category = o.building_category;
    this.year = o.building_year;
    this.numberOfEntrances = o.building_number_of_entrances;
    this.numberOfFloors = o.building_number_of_floors;
    this.numberOfApartments = o.building_number_of_apartments;

    return this;
  }
}
