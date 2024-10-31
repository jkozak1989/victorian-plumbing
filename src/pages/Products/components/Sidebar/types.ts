import { Facet } from "../../types";

export interface SidebarProps {
  facets: Facet[];
  onChangeFacets: (facets: FormattedActiveFacets) => void
}

export interface FormattedActiveFacets {
  [key: string]: { identifier: string; value: any }[];
}

export interface ActiveFacet {
  key: string;
  identifier: string;
  value: any;
}