import { StaticImageData } from "next/image";

export type PageData = {
  names: string;
  conferenceName: string;
  conferenceVenue: string;
  conferenceStartDate: string;
  conferenceEndDate: string;
  passportNumber: string;
  picture: StaticImageData;
  conferenceCode: string;
  address: string;
  department: string;
  conferenceTheme: string;
};
