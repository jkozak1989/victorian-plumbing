import { FC } from 'react';
import { Facet } from '../../types';
import { SidebarCard } from '../SidebarCard/SidebarCard';
import { SidebarProps } from './types';
import { useSidebar } from './Sidebar.hooks';

import './Sidebar.css';

export const Sidebar: FC<SidebarProps> = (props) => {
  const { facets } = props;
  const { handleChangeFacets, activeFacets } = useSidebar(props);

  return (
    <section className='sidebar'>
      <div className='sidebar-title'>Filter by</div>
      {facets.map((facet: Facet) => (
        <SidebarCard
          facet={facet}
          activeFacets={activeFacets.current}
          onChangeFacets={handleChangeFacets}
          key={facet.identifier}
        />
      ))}
    </section>
  );
};
