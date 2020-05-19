import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const company = new Company();
console.log(company);

const user = new User();
console.log(user);

const map = new Map(document.getElementById('map'));

map.addMarker(company);
map.addMarker(user);
