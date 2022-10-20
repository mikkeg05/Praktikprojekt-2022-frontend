/* eslint-disable no-use-before-define */
import { InformationEvent } from "http"

export interface GetInfoResults {
    info: InformationEvent;
}

export interface FooterResults {
  NavigationSection: NavigationSectionProps;
  AdressSection: AdressSectionProps;
  FollowUsSection: FollowUsSectionProps;
}

export interface NavigationSectionProps {
  Links: NavigationLinks[];
}

export interface NavigationLinks {
  Link: string;
  LinkName: string;
}

export interface AdressSectionProps {
  Link: string;
  LinkNames: string;
  Text: string;
  Icon: null;
  id: null;
}

export interface FollowUsSectionProps {
  Links: FollowUsLinks[];
}
export interface FollowUsLinks {
  Link: string;
  LinkName: string;
  Icon: null;
}
