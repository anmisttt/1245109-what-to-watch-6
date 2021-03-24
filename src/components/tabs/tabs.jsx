import React, {useState} from 'react';
import TabsOverview from '../tabs-overview/tabs-overview';
import TabsDetails from '../tabs-details/tabs-details';
import TabsReviews from '../tabs-reviews/tabs-reviews';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsTitles = [`Overview`, `Details`, `Reviews`];

  return (<div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabsTitles.map((tab, i) => (
          <li key={i} className={(activeTab === i) ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <a href="#" className="movie-nav__link" onClick={(evt)=>{
              evt.preventDefault();
              setActiveTab(i);
            }}>{tab}</a>
          </li>
        ))}
      </ul>
    </nav>
    {(activeTab === 0) && <TabsOverview></TabsOverview>}
    {(activeTab === 1) && <TabsDetails></TabsDetails>}
    {(activeTab === 2) && <TabsReviews></TabsReviews>}

  </div>);
};

export default Tabs;
