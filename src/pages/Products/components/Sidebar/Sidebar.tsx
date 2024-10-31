import { FC } from 'react';
import { Facet } from '../../types';
import { SidebarCard } from '../SidebarCard/SidebarCard';

import './Sidebar.css';

export const Sidebar: FC<{ facets: Facet[] }> = (props) => {
  const { facets } = props;
  return (
    <section className='sidebar'>
      <div className='sidebar-title'>Filter by</div>
      {facets.map((facet: Facet) => (
        <SidebarCard
          facet={facet}
          key={facet.identifier}
        />
      ))}
    </section>
  );
};
