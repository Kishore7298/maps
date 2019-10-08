import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

let user = new User();
let company = new Company();

let customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
