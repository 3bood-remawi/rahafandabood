import React from 'react';
import FilterBy from '../Influencer_discovery/FilterBy';
import ProfileCardList from '../Influencer_discovery/ProfileCardList';
import SearchBar from '../Influencer_discovery/SearchBar';
import InfluencerNavbar from '../loadingInfluencerPage/InfluencerNavbar';

function All() {
  return (
    <>
      <InfluencerNavbar />
      <SearchBar />
      <ProfileCardList />
      <FilterBy />
    </>
  );
}

export default All;