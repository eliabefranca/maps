import faker from 'faker';
import { Mappable } from './Map';

export class User implements Mappable {
  name: string;
  photo: string;
  location: {
    lat: number;
    lng: number;
  };
  color = '#04987e';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };

    this.photo = faker.image.people(50, 50);
  }

  markerContent(): string {
    return `
    <div style="text-align: center">
      <h4 style="margin:0 0 15px 0;">${this.name}</h4>
      <img src="${this.photo}" alt="${this.name}" style="width: 50px; height: 50px; border-radius: 50%"/>
    </div>
    `;
  }
}
