import ApiBase from './api-base';
import { normalizeParams } from './normalize-params.decorator';
import { PODListItem } from './models/pod/pod-list-item';
import { StatusReportsItem } from './models/pod/status-reports-item';
import { SystemComponentsListItem } from './models/pod/system-components-list-item';
import { BoilerListItem } from './models/pod/boiler-list-item';
import { BoilerRepairListItem } from './models/pod/boiler-repair-list-item';
import { BurnerListItem } from './models/pod/burner-list-item';
import { BurnerRepairListItem } from './models/pod/burner-repair-list-item';
import { DistrictHeatingStationListItem } from './models/pod/district-heating-station-list-item';
import { DistrictHeatingStationRepairListItem } from './models/pod/district-heating-station-repair-list-item';
import { ActuatorListItem } from './models/pod/actuator-list-item';
import { ActuatorRepairListItem } from './models/pod/actuator-repair-list-item';
import { PumpListItem } from './models/pod/pump-list-item';
import { PumpRepairListItem } from './models/pod/pump-repair-list-item';
import { ControlUnitListItem } from './models/pod/control-unit-list-item';
import { ControlUnitRepairListItem } from './models/pod/control-unit-repair-list-item';
import { DistributionBlockListItem } from './models/pod/distribution-block-list-item';
import { DistributionBlockRepairListItem } from './models/pod/distribution-block-repair-list-item';
import { ExhaustSystemListItem } from './models/pod/exhaust-system-list-item';
import { ExhaustSystemRepairListItem } from './models/pod/exhaust-system-repair-list-item';
import { ExpansionTankListItem } from './models/pod/expansion-tank-list-item';
import { ExpansionTankRepairListItem } from './models/pod/expansion-tank-repair-list-item';
import { FittingListItem } from './models/pod/fitting-list-item';
import { FittingRepairListItem } from './models/pod/fitting-repair-list-item';
import { FuelTankListItem } from './models/pod/fuel-tank-list-item';
import { FuelTankRepairListItem } from './models/pod/fuel-tank-repair-list-item';
import { HeatExchangerListItem } from './models/pod/heat-exchanger-list-item';
import { HeatExchangerRepairListItem } from './models/pod/heat-exchanger-repair-list-item';
import { WaterStorageListItem } from './models/pod/water-storage-list-item';
import { WaterStorageRepairListItem } from './models/pod/water-storage-repair-list-item';
import { ThermocontrolListItem } from './models/pod/thermocontrol-list-item';
import { ThermocontrolRepairListItem } from './models/pod/thermocontrol-repair-list-item';
import { PressureControlListItem } from './models/pod/pressure-control-list-item';
import { PressureControlRepairListItem } from './models/pod/pressure-control-repair-list-item';
import { HydraulicSwitchListItem } from './models/pod/hydraulic-switch-list-item';
import { HydraulicSwitchRepairListItem } from './models/pod/hydraulic-switch-repair-list-item';
export default class extends ApiBase {
  @normalizeParams
  async getPODList(place: string, buildingID: string) {
    const result = await this.get(
      `component/find/pod?place=${place}&building_id=${buildingID}`
    );
    return result.map((x: any) => new PODListItem().map(x));
  }

  @normalizeParams
  async getStatusReports(pODID: string, reportCategory: string, date: string) {
    const result = await this.get(
      `component/find/status_reports?p_odid=${pODID}&report_category=${reportCategory}&date=${date}`
    );
    return result.map((x: any) => new StatusReportsItem().map(x));
  }

  @normalizeParams
  async getSystemComponentsList(
    buildingID: string,
    pODID: string,
    networkID: string
  ) {
    const result = await this.get(
      `component/find/system_components?building_id=${buildingID}&p_odid=${pODID}&network_id=${networkID}`
    );
    return result.map((x: any) => new SystemComponentsListItem().map(x));
  }

  @normalizeParams
  async getBoilerList(manufacturer: string, boilerType: string) {
    const result = await this.get(
      `component/find/boiler?manufacturer=${manufacturer}&boiler_type=${boilerType}`
    );
    return result.map((x: any) => new BoilerListItem().map(x));
  }

  @normalizeParams
  async getBoilerRepairList(
    dateRepaired: string,
    boilerType: string,
    boilerID: string
  ) {
    const result = await this.get(
      `component/find/boiler_repair?date_repaired=${dateRepaired}&boiler_type=${boilerType}&boiler_id=${boilerID}`
    );
    return result.map((x: any) => new BoilerRepairListItem().map(x));
  }

  @normalizeParams
  async getBurnerList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/burner?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new BurnerListItem().map(x));
  }

  @normalizeParams
  async getBurnerRepairList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/burner_repair?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new BurnerRepairListItem().map(x));
  }

  @normalizeParams
  async getDistrictHeatingStationList(
    manufacturer: string,
    principle: string,
    adjustedCapacity: string
  ) {
    const result = await this.get(
      `component/find/district_heating_station?manufacturer=${manufacturer}&principle=${principle}&adjusted_capacity=${adjustedCapacity}`
    );
    return result.map((x: any) => new DistrictHeatingStationListItem().map(x));
  }

  @normalizeParams
  async getDistrictHeatingStationRepairList(
    manufacturer: string,
    principle: string,
    adjustedCapacity: string
  ) {
    const result = await this.get(
      `component/find/district_heating_station_repair?manufacturer=${manufacturer}&principle=${principle}&adjusted_capacity=${adjustedCapacity}`
    );
    return result.map((x: any) =>
      new DistrictHeatingStationRepairListItem().map(x)
    );
  }

  @normalizeParams
  async getActuatorList(manufacturer: string, operationPrinciple: string) {
    const result = await this.get(
      `component/find/actuator?manufacturer=${manufacturer}&principle=${operationPrinciple}`
    );
    return result.map((x: any) => new ActuatorListItem().map(x));
  }

  @normalizeParams
  async getActuatorRepairList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/actuator_repair?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new ActuatorRepairListItem().map(x));
  }

  @normalizeParams
  async getPumpList(
    manufacturer: string,
    designationType: string,
    useCase: string
  ) {
    const result = await this.get(
      `component/find/circulation_pump?manufacturer=${manufacturer}&designation_type=${designationType}&use_case=${useCase}`
    );
    return result.map((x: any) => new PumpListItem().map(x));
  }

  @normalizeParams
  async getPumpRepairList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/pump_repair?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new PumpRepairListItem().map(x));
  }

  @normalizeParams
  async getControlUnitList(
    manufacturer: string,
    designationType: string,
    remoteControl: string
  ) {
    const result = await this.get(
      `component/find/control_unit?manufacturer=${manufacturer}&designation_type=${designationType}&remote_control=${remoteControl}`
    );
    return result.map((x: any) => new ControlUnitListItem().map(x));
  }

  @normalizeParams
  async getControlUnitRepairList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/control_unit_repair?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new ControlUnitRepairListItem().map(x));
  }

  @normalizeParams
  async getDistributionBlockList(
    manufacturer: string,
    designationType: string,
    distributionBlock: string
  ) {
    const result = await this.get(
      `component/find/distribution_block?manufacturer=${manufacturer}&designation_type=${designationType}&type=${distributionBlock}`
    );
    return result.map((x: any) => new DistributionBlockListItem().map(x));
  }

  @normalizeParams
  async getDistributionBlockRepairList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/distribution_block_repair?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new DistributionBlockRepairListItem().map(x));
  }

  @normalizeParams
  async getExhaustSystemList(
    manufacturer: string,
    designationType: string,
    airExhaustSystem: string
  ) {
    const result = await this.get(
      `component/find/exhaust_system?manufacturer=${manufacturer}&designation_type=${designationType}&is_air=${airExhaustSystem}`
    );
    return result.map((x: any) => new ExhaustSystemListItem().map(x));
  }

  @normalizeParams
  async getExhaustSystemRepairList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/exhaust_system_repair?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new ExhaustSystemRepairListItem().map(x));
  }

  @normalizeParams
  async getExpansionTankList(
    manufacturer: string,
    designationType: string,
    volumeExpansionTank: string
  ) {
    const result = await this.get(
      `component/find/expansion_tank?manufacturer=${manufacturer}&designation_type=${designationType}&volume=${volumeExpansionTank}`
    );
    return result.map((x: any) => new ExpansionTankListItem().map(x));
  }

  @normalizeParams
  async getExpansionTankRepairList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/expansion_tank_repair?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new ExpansionTankRepairListItem().map(x));
  }

  @normalizeParams
  async getFittingList(
    manufacturer: string,
    designationType: string,
    fittingType: string
  ) {
    const result = await this.get(
      `component/find/fitting?manufacturer=${manufacturer}&designation_type=${designationType}&fitting_type=${fittingType}`
    );
    return result.map((x: any) => new FittingListItem().map(x));
  }

  @normalizeParams
  async getFittingRepairList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/fitting_repair?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new FittingRepairListItem().map(x));
  }

  @normalizeParams
  async getFuelTankList(
    manufacturer: string,
    designationType: string,
    fuelTankCategory: string
  ) {
    const result = await this.get(
      `component/find/fuel_tank?manufacturer=${manufacturer}&designation_type=${designationType}&category=${fuelTankCategory}`
    );
    return result.map((x: any) => new FuelTankListItem().map(x));
  }

  @normalizeParams
  async getFuelTankRepairList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/fuel_tank_repair?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new FuelTankRepairListItem().map(x));
  }

  @normalizeParams
  async getHeatExchangerList(
    manufacturer: string,
    designationType: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/heat_exchanger?manufacturer=${manufacturer}&designation_type=${designationType}&capacity=${capacity}`
    );
    return result.map((x: any) => new HeatExchangerListItem().map(x));
  }

  @normalizeParams
  async getHeatExchangerRepairList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/heat_exchanger_repair?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new HeatExchangerRepairListItem().map(x));
  }

  @normalizeParams
  async getWaterStorageList(
    manufacturer: string,
    designationType: string,
    storageType: string
  ) {
    const result = await this.get(
      `component/find/water_storage?manufacturer=${manufacturer}&designation_type=${designationType}&storage_type=${storageType}`
    );
    return result.map((x: any) => new WaterStorageListItem().map(x));
  }

  @normalizeParams
  async getWaterStorageRepairList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/water_storage_repair?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new WaterStorageRepairListItem().map(x));
  }

  @normalizeParams
  async getThermocontrolList(
    manufacturer: string,
    designationType: string,
    tempControlType: string
  ) {
    const result = await this.get(
      `component/find/thermo_control?manufacturer=${manufacturer}&designation_type=${designationType}&control_type=${tempControlType}`
    );
    return result.map((x: any) => new ThermocontrolListItem().map(x));
  }

  @normalizeParams
  async getThermocontrolRepairList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/thermocontrol_repair?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new ThermocontrolRepairListItem().map(x));
  }

  @normalizeParams
  async getPressureControlList(
    manufacturer: string,
    designationType: string,
    pressureControlType: string
  ) {
    const result = await this.get(
      `component/find/pressure_control?manufacturer=${manufacturer}&designation_type=${designationType}&control_type=${pressureControlType}`
    );
    return result.map((x: any) => new PressureControlListItem().map(x));
  }

  @normalizeParams
  async getPressureControlRepairList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/pressure_control_repair?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new PressureControlRepairListItem().map(x));
  }

  @normalizeParams
  async getHydraulicSwitchList(manufacturer: string, designationType: string) {
    const result = await this.get(
      `component/find/hydraulic_switch?manufacturer=${manufacturer}&designation_type=${designationType}`
    );
    return result.map((x: any) => new HydraulicSwitchListItem().map(x));
  }

  @normalizeParams
  async getHydraulicSwitchRepairList(
    burnerID: string,
    operationMode: string,
    capacity: string
  ) {
    const result = await this.get(
      `component/find/hydraulic_switch_repair?burner_id=${burnerID}&operation_mode=${operationMode}&capacity=${capacity}`
    );
    return result.map((x: any) => new HydraulicSwitchRepairListItem().map(x));
  }
}
