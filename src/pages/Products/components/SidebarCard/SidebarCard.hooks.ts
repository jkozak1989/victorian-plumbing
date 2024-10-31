import { useState } from "react";
import { SidebarCardProps } from "./types";
import { Option } from "../../types";

export const useSidebarCard = (props: SidebarCardProps) => {
  const { facet, onChangeFacets } = props;
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const handleChangeCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  const handleChangeCheckbox = (option: Option) => {
    onChangeFacets(facet.identifier, option.identifier, option.value);
  };
    
  return {
    collapsed,
    handleChangeCollapsed,
    handleChangeCheckbox
  }
}