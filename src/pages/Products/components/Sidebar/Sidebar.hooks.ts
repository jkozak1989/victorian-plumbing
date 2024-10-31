import { useRef } from "react";
import { ActiveFacet, FormattedActiveFacets, SidebarProps } from "./types";

export const useSidebar = (props: SidebarProps) => {
  const { onChangeFacets } = props;
  let activeFacets = useRef<ActiveFacet[]>([]);

  const handleChangeFacets = (key: string, identifier: string, value: any) => {
    if (activeFacets.current.some(facet => facet.identifier === identifier)) {
      activeFacets.current = activeFacets.current.filter(facet => facet.identifier !== identifier);
    } else {
      activeFacets.current = [...activeFacets.current, {key: key, identifier: identifier, value: value}]
    }
    let formattedFacets = byFacet();
    onChangeFacets(formattedFacets)
  };

  const byFacet = () => {
    return activeFacets.current.reduce((acc: FormattedActiveFacets, facet) => {
      if (!acc[facet.key]) {
        acc[facet.key] = [];
      }
      acc[facet.key].push({ identifier: facet.identifier, value: facet.value });
      return acc;
    }, {});
  };
    
  return {
    handleChangeFacets,
    activeFacets
  }
}