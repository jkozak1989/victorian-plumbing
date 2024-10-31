import { Facet } from "../../types";
import { ActiveFacet } from "../Sidebar/types";

export interface SidebarCardProps {
  facet: Facet;
  activeFacets: ActiveFacet[];
  onChangeFacets: (key: string, identifier: string, value: any) => void;
}