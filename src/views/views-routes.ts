import ComingSoon from './ComingSoon.vue';
import Customer from './Customer/Customer.vue';
import CustomerList from './Customer/CustomerList.vue';
import Contact from './Customer/Contact.vue';
import ContactList from './Customer/ContactList.vue';
import Representative from './Customer/Representative.vue';
import Contract from './Customer/Contract.vue';

export const views = {
    ComingSoon,
    Customer,
    CustomerList,
    Contact,
    ContactList,
    Representative,
    Contract,
};

export let routes: any[] = [
    {
        name: 'Customer',
        icon: 'customer ',
        routes: [
            {
                name: 'Customer',
                icon: 'one-customer',
                routes: [
                    { name: 'Customer', title: 'Customer', icon: 'customer' },
                    { name: 'Customer List', title: 'Customer List', icon: 'list' },
                    {
                        name: 'Customer Perfomance',
                        title: 'Customer Perfomance',
                        icon: 'perfomance',
                    },
                ],
            },
            {
                name: 'Contact Person',
                icon: 'contact-person',
                routes: [
                    { name: 'Contact', title: 'Contact Person', icon: 'contact' },
                    { name: 'Contact List', title: 'Contact List', icon: 'contacts-list' },
                ],
            },
            {
                name: 'Representative',
                icon: 'representative',
                routes: [
                    { name: 'Representative', title: 'Representative', icon: 'contact' },
                    {
                        name: 'Representative List',
                        title: 'Representative List',
                        icon: 'representatives-list',
                    },
                ],
            },
            {
                name: 'Contract',
                icon: 'contract',
                routes: [
                    { name: 'Contract', title: 'Contract', icon: 'contract' },
                    { name: 'Contract List', title: 'Contract List', icon: 'contract-list' },
                ],
            },
        ],
    },
    {
        name: 'Supplier',
        icon: 'supplier',
        routes: [
            {
                name: 'Supplier',
                icon: 'one-customer',
                routes: [
                    { name: 'Supplier', title: 'Supplier', icon: '' },
                    { name: 'Supplier List', title: 'Supplier List', icon: '' },
                ],
            },
            {
                name: 'Contact Person',
                icon: 'contact-person',
                routes: [
                    { name: 'Contact', title: 'Contact', icon: '' },
                    { name: 'Contact List', title: 'Contact List', icon: '' },
                ],
            },
            {
                name: 'Contract',
                icon: 'contract',
                routes: [
                    { name: 'Contract', title: 'Contract', icon: '' },
                    { name: 'Contract List', title: 'Contract List', icon: '' },
                ],
            },
        ],
    },
    {
        name: 'Building',
        icon: 'building',
        routes: [
            {
                name: 'Building',
                icon: 'building-line',
                routes: [
                    { name: 'Building', title: 'Building', icon: '' },
                    { name: 'Building List', title: 'Building List', icon: '' },
                ],
            },
            {
                name: 'Entrance',
                icon: 'entrance',
                routes: [
                    { name: 'Entrance', title: 'Entrance', icon: '' },
                    { name: 'Entrance List', title: 'Entrance List', icon: '' },
                ],
            },
        ],
    },
    {
        name: 'POD',
        icon: 'fireplace',
        routes: [
            {
                name: 'POD',
                icon: 'pod',
                routes: [
                    { name: 'POD', title: 'POD', icon: '' },
                    { name: 'POD List', title: 'POD List', icon: '' },
                    { name: 'Summary', title: 'POD Summary', icon: '' },
                ],
            },
            {
                name: 'Distribution Network',
                icon: 'distribution-ntwk',
                routes: [
                    {
                        name: 'Distribution Network',
                        title: 'Distribution Network',
                        icon: '',
                    },
                    { name: 'System Components', title: 'System Components List', icon: '' },
                    { name: 'Summary', title: 'Distribution Network Summary', icon: '' },
                ],
            },
            {
                name: 'Boiler',
                icon: 'boiler',
                routes: [
                    { name: 'Boiler', title: 'Boiler', icon: '' },
                    { name: 'Boiler List', title: 'Boiler List', icon: '' },
                    { name: 'Boiler Repair List', title: 'Boiler Repair List', icon: '' },
                    { name: 'Summary', title: 'Boiler Summary', icon: '' },
                ],
            },
            {
                name: 'Burner',
                icon: 'burner',
                routes: [
                    { name: 'Burner', title: 'Burner', icon: '' },
                    { name: 'Burner List', title: 'Burner List', icon: '' },
                    { name: 'Burner Repair List', title: 'Burner Repair List', icon: '' },
                    { name: 'Summary', title: 'Burner Summary', icon: '' },
                ],
            },
            {
                name: 'District Heating Station',
                icon: 'heating-station',
                routes: [
                    {
                        name: 'District Heating Station',
                        title: 'District Heating Station (DHS)',
                        icon: '',
                    },
                    { name: 'DHS List', title: 'District Heating Station List', icon: '' },
                    { name: 'Repair List', title: 'District Heating Station Repair List', icon: '' },
                    { name: 'Summary', title: 'District Heating Station Summary', icon: '' },
                ],
            },
            {
                name: 'Actuator',
                icon: 'actuator',
                routes: [
                    { name: 'Actuator', title: 'Actuator', icon: '' },
                    { name: 'Actuator List', title: 'Actuator List', icon: '' },
                    { name: 'Repair List', title: 'Actuator Repair List', icon: '' },
                    { name: 'Summary', title: 'Actuator Summary', icon: '' },
                ],
            },
            {
                name: 'Pump',
                icon: 'pump',
                routes: [
                    { name: 'Pump', title: 'Pump', icon: '' },
                    { name: 'Pump List', title: 'Pump List', icon: '' },
                    { name: 'Repair List', title: 'Pump Repair List', icon: '' },
                    { name: 'Summary', title: 'Pump Summary', icon: '' },
                ],
            },
            {
                name: 'Control Unit',
                icon: 'control-unit',
                routes: [
                    { name: 'Control Unit', title: 'Control Unit', icon: '' },
                    { name: 'Control Unit List', title: 'Control Unit List', icon: '' },
                    { name: 'Repair List', title: 'Control Unit Repair List', icon: '' },
                    { name: 'Summary', title: 'Control Unit Summary', icon: '' },
                ],
            },
            {
                name: 'Distribution Block',
                icon: 'distribution-block',
                routes: [
                    { name: 'Distribution Block', title: 'Distribution Block', icon: '' },
                    {
                        name: 'Distribution Block List',
                        title: 'Distribution Block List',
                        icon: '',
                    },
                    { name: 'Repair List', title: 'Distribution Block Repair List', icon: '' },
                    { name: 'Summary', title: 'Distribution Block Summary', icon: '' },
                ],
            },
            {
                name: 'Exhaust System',
                icon: 'boiler',
                routes: [
                    { name: 'Exhaust System', title: 'Exhaust System', icon: '' },
                    {
                        name: 'Exhaust System List',
                        title: 'Exhaust System List',
                        icon: '',
                    },
                    { name: 'Repair List', title: 'Exhaust System Repair List', icon: '' },
                    { name: 'Summary', title: 'Exhaust System Summary', icon: '' },
                ],
            },
            {
                name: 'Expansion Tank',
                icon: 'expansion-tank',
                routes: [
                    { name: 'Expansion Tank', title: 'Expansion Tank', icon: '' },
                    {
                        name: 'Expansion Tank List',
                        title: 'Expansion Tank List',
                        icon: '',
                    },
                    { name: 'Repair List', title: 'Expansion Tank Repair List', icon: '' },
                    { name: 'Summary', title: 'Expansion Tank Summary', icon: '' },
                ],
            },
            {
                name: 'Fittings',
                icon: 'fittings',
                routes: [
                    { name: 'Fitting', title: 'Fitting', icon: '' },
                    { name: 'Fitting List', title: 'Fitting List', icon: '' },
                    { name: 'Repair List', title: 'Fittings Repair List', icon: '' },
                    { name: 'Summary', title: 'Fitting Summary', icon: '' },
                ],
            },
            {
                name: 'Fuel Tank',
                icon: 'fuel-tank',
                routes: [
                    { name: 'Fuel Tank', title: 'Fuel Tank', icon: '' },
                    { name: 'Fuel Tank List', title: 'Fuel Tank List', icon: '' },
                    { name: 'Repair List', title: 'Fuel Tank Repair List', icon: '' },
                    { name: 'Summary', title: 'Fuel Tank Summary', icon: '' },
                ],
            },
            {
                name: 'Heat Exchanger',
                icon: 'heat-exchanger',
                routes: [
                    { name: 'Heat Exchanger', title: 'Heat Exchanger', icon: '' },
                    {
                        name: 'Heat Exchanger List',
                        title: 'Heat Exchanger List',
                        icon: '',
                    },
                    { name: 'Repair List', title: 'Heat Exchanger Repair List', icon: '' },
                    { name: 'Summary', title: 'Heat Exchanger Summary', icon: '' },
                ],
            },
            {
                name: 'Water Storage',
                icon: 'water-storage',
                routes: [
                    { name: 'Water Storage', title: 'Water Storage', icon: '' },
                    { name: 'Water Storage List', title: 'Water Storage List', icon: '' },
                    { name: 'Repair List', title: 'Water Storage Repair List', icon: '' },
                    { name: 'Summary', title: 'Water Storage Summary', icon: '' },
                ],
            },
            {
                name: 'Thermo Control',
                icon: 'thermo-control',
                routes: [
                    { name: 'Thermocontrol', title: 'Thermocontrol', icon: '' },
                    { name: 'Thermocontrol List', title: 'Thermocontrol List', icon: '' },
                    { name: 'Repair List', title: 'Thermocontrol Repair List', icon: '' },
                    { name: 'Summary', title: 'Thermocontrol Summary', icon: '' },
                ],
            },
            {
                name: 'Pressure Control',
                icon: 'pressure-control',
                routes: [
                    { name: 'Pressure Control', title: 'Pressure Control', icon: '' },
                    {
                        name: 'Pressure Control List',
                        title: 'Pressure Control List',
                        icon: '',
                    },
                    { name: 'Repair List', title: 'Pressure Control Repair List', icon: '' },
                    { name: 'Summary', title: 'Pressure Control Summary', icon: '' },
                ],
            },
            {
                name: 'Hydraulic Switch',
                icon: 'hydraulic-switch',
                routes: [
                    { name: 'Hydraulic Switch', title: 'Hydraulic Switch', icon: '' },
                    {
                        name: 'Hydraulic Switch List',
                        title: 'Hydraulic Switch List',
                        icon: '',
                    },
                    { name: 'Repair List', title: 'Hydraulic Switch Repair List', icon: '' },
                    { name: 'Summary', title: 'Hydraulic Switch Summary', icon: '' },
                ],
            },
        ],
    },
];

routes.forEach((x: any) => {
    x.link = x.name.toLowerCase().replace(/ /g, '-');

    x.routes.forEach((z: any) => {
        z.link = z.name.toLowerCase().replace(/ /g, '-');

        z.routes.forEach((c: any) => {
            c.link = c.name.toLowerCase().replace(/ /g, '-');
        });
    });
});
