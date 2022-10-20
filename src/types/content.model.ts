/* eslint-disable no-use-before-define */
import { InformationEvent } from "http"

export interface GetInfoResults {
    info: InformationEvent;
}

export interface ContentPageResults {
  Header: HeaderProps;
  AboutUsSection: AboutUsSectionProps;
  Articles: ArticlesProps;
  Sections: SectionsProps;
  TeamMemberSection: TeamMemberSectionProps;
  TeamMember: TeamMemberProps;
}

export interface HeaderProps {
  Title: string;
  Subheader: string;
  Button: null;
}

export interface AboutUsSectionProps {
  ImageUrl: string;
  Title: string;
  Body: string;
  Id: string;
}

export interface ArticlesProps {
  Sections: SectionsProps[];
}
export interface SectionsProps {
  ImageUrl: string;
  Title: string;
  Body: string;
  Id: string;
}

export interface TeamMemberSectionProps {
  Header: string;
  Subheader: string;
  TeamMemberList: TeamMemberProps[];
}
export interface TeamMemberProps {
  TeamMemberImage: string;
  TeamMemberName: string;
  JobTitle: string;
  Description: string;
  Id: string;
}
