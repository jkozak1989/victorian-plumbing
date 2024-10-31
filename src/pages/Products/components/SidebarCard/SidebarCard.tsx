import { FC } from 'react';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { SidebarCardProps } from './types';
import { useSidebarCard } from './SidebarCard.hooks';

import './SidebarCard.css';

export const SidebarCard: FC<SidebarCardProps> = (props) => {
  const { facet, activeFacets } = props;
  const { collapsed, handleChangeCheckbox, handleChangeCollapsed } = useSidebarCard(props);

  return (
    <section className='sidebar-card'>
      <div
        className='sidebar-card-title'
        onClick={handleChangeCollapsed}
      >
        <div>{facet.displayName}</div>
        {collapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </div>
      {!collapsed && (
        <div className='sidebar-card-content'>
          {facet.options.map((option) => (
            <div
              className='sidebar-card-content-row'
              key={option.identifier}
            >
              <Checkbox
                className='sidebar-checkbox'
                onClick={() => handleChangeCheckbox(option)}
                checked={activeFacets.some((facet) => facet.identifier === option.identifier)}
              />
              {`${option.displayValue} (${option.productCount})`}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
