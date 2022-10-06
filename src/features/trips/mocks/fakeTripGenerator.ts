import { Trip } from "../tripsEntity";

export interface FakeTrip extends Trip {}
export class FakeTrip {
  constructor() {
    this.id = Math.floor(Math.random() * 10000).toString();
    this.image = "https://picsum.photos/200/300";
    this.emissions_offset = Math.random() * 100;
    this.name = "Trip to the moon";
    this.rating = Math.random() * 5;
    this.count_of = {
      countries: Math.floor(Math.random() * 10),
      days: Math.floor(Math.random() * 10),
    };
  }
  setId(id: Trip["id"]) {
    this.id = id;
    return this;
  }

  setName(name: Trip["name"]) {
    this.name = name;
    return this;
  }

  setImage(image: Trip["image"]) {
    this.image = image;
    return this;
  }

  setEmissionsOffset(emissionsOffset: Trip["emissions_offset"]) {
    this.emissions_offset = emissionsOffset;
    return this;
  }

  setRating(rating: Trip["rating"]) {
    this.rating = rating;
    return this;
  }

  setCountriesCount(countriesCount: Trip["count_of"]["countries"]) {
    this.count_of.countries = countriesCount;
    return this;
  }

  setDaysCount(daysCount: Trip["count_of"]["days"]) {
    this.count_of.days = daysCount;
    return this;
  }

  build(): Trip {
    return {
      id: this.id,
      image: this.image,
      emissions_offset: this.emissions_offset,
      name: this.name,
      rating: this.rating,
      count_of: {
        countries: this.count_of.countries,
        days: this.count_of.days,
      },
    };
  }
}
