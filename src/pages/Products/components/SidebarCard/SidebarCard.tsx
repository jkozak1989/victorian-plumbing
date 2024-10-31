import { FC, useState } from 'react';
import { Facet } from '../../types';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import './SidebarCard.css';

export const SidebarCard: FC<{ facet: Facet }> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const { facet } = props;

  const handleChangeCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

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
              <Checkbox className='sidebar-checkbox' />
              {`${option.displayValue} (${option.productCount})`}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
