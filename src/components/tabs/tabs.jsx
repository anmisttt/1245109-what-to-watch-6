import React, {useState} from 'react';
import TabsOverview from '../tabs-overview/tabs-overview';
import TabsDetails from '../tabs-details/tabs-details';
import TabsReviews from '../tabs-reviews/tabs-reviews';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsTitles = [`Overview`, `Details`, `Reviews`];

  function handleClick(e) {
    e.preventDefault();
  }

  return (<div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabsTitles.map((tab, i) => (
          <li key={i} className={(activeTab === i) ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`} onClick={() => setActiveTab(i)}>
            <a href="#" className="movie-nav__link" onClick={handleClick}>{tab}</a>
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
