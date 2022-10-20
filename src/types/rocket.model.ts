/* eslint-disable no-use-before-define */
// import { InformationEvent } from "http"

export interface RocketResults {
    Rockets: RocketProps[]
}

export interface RocketProps {
    Rockets: Rocket[],
}

export interface Rocket {
  id: string;
  rid: string;
  name: string;
  status: string;
  available: string;
  location: string;
  longlat: string;
  nextLaunch: string;
  prevLaunch: string;
  estOrbitTime: string;
  image: string;
  currCap: number;
  maxCap: number;
  lenght: number;
  width: number;
  height: number;
  weight: number;
}

// export interface Info {
//     count: number;
//     pages: number;
//     next: number;
//     prev: number;
// }
