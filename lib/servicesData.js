import { serviceImages, keralaPackagesImages } from "@/lib/imagesData";

const servicesData = [
  {
    title: "Flight Ticketing",
    description:
      "Find Domestic and International Air Tickets at lowest affordable price. Book the cheapest flight with Tulip Tours & Travels.",
    image: serviceImages.flight,
  },
  {
    title: "Train Ticketing",
    description:
      "Find Train Tickets at lowest affordable price. Book the cheapest train tickets with Tulip Tours & Travels.",
    image: serviceImages.train,
  },
  {
    title: "Bus Ticketing",
    description:
      "Find Bus Tickets at lowest affordable price. Book the cheapest bus tickets with Tulip Tours & Travels.",
    image: serviceImages.bus,
  },
  {
    title: "Domestic Tour Packages",
    description:
      "We can provide you best domestic packages at affordable rate. Book your budget friendly tour packages with Tulip Tours & Travels.",
    image: serviceImages.domestic_tour,
  },
  {
    title: "International Tour Packages",
    description:
      "We can provide you best international packages at affordable rate. Book your budget friendly tour packages with Tulip Tours & Travels.",
    image: serviceImages.international_tour,
  },
  {
    title: "Hotel Booking",
    description:
      "Find Best Hotel Rooms at lowest affordable price. Book the cheapest and best hotel rooms with Tulip Tours & Travels.",
    image: serviceImages.hotel,
  },
];

const keralaPackages = [
  {
    packageName: "Kochi-Munnar-Kumarakom-Alleppey-Kochi",
    tripDuration: "5 Days",
    img: keralaPackagesImages.kmkak,
  },
  {
    packageName: "Kochi-Munnar-Periyar-Thekkady-Alleppey-Kovalam-Trivandrum",
    tripDuration: "7 Days",
    img: keralaPackagesImages.kmptakkt,
  },
  {
    packageName:
      "Kochi-Munnar-Periyar-Thekkady-Alleppey-Kovalam-Kanyakumari-Trivandrum",
    tripDuration: "8 Days",
    img: keralaPackagesImages.kmptakt,
  },
];

export { keralaPackages, servicesData };
