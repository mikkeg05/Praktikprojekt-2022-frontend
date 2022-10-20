export interface StatProps {
    sales: {
        id: number[];
        label: string[];
        number: number[];
        difference: string[];
    };
  }

export interface GetStatResults {
    results: StatProps[]
}

// ---------------------------------------------------------
// import { InformationEvent } from "http"

// export interface GetSalesResults {
//     info: InformationEvent;
//     results: SalesProps[]
// }

// export interface SalesProps {
//     id: number;
//     name: string;
//     dataLabels: string[];
//     dataSeries: {
//         name: string;
//         data: number[];
//     };
//   }

// export interface StatProps {
//     sales: {
//         id: number[];
//         label: string[];
//         number: number[];
//         difference: string[];
//     };
// }
