import CustomerApi from './customer';
import SupplierApi from './supplier';
import BuildingApi from './building';
import PodApi from './pod';

export const customer = new CustomerApi();
export const supplier = new SupplierApi();
export const building = new BuildingApi();
export const pod = new PodApi();
