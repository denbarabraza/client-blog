import React, { useState } from 'react';
import Map, { ViewState, ViewStateChangeEvent } from 'react-map-gl';

import { MarkerControl } from '@/components/MapInContactUs/MarkerControl';
import { coordinates, envEmailJs } from '@/constants';
import { IOffice } from '@/types';

import {
  defaultBearing,
  defaultLatitude,
  defaultLongitude,
  defaultPadding,
  defaultPitch,
} from './config';

const MapInContactUs = () => {
  const [selectedOffice, setSelectedOffice] = useState<IOffice | null>(null);
  const [viewState, setViewState] = useState<ViewState>({
    longitude: defaultLongitude,
    latitude: defaultLatitude,
    zoom: 5,
    bearing: defaultBearing,
    pitch: defaultPitch,
    padding: defaultPadding,
  });
  const onChangeViewState = (viewState: ViewState) => {
    setViewState(prevState => ({
      ...prevState,
      longitude: viewState.longitude,
      latitude: viewState.latitude,
      zoom: viewState.zoom,
    }));
  };
  const { NEXT_PUBLIC_APP_MAPBOX_TOKEN } = envEmailJs;

  return (
    <Map
      {...viewState}
      mapStyle='mapbox://styles/mapbox/navigation-day-v1'
      mapboxAccessToken={NEXT_PUBLIC_APP_MAPBOX_TOKEN}
      attributionControl={false}
      onMove={(evt: ViewStateChangeEvent) => onChangeViewState(evt.viewState)}
      style={{ height: '40vh', width: '100vw' }}
    >
      <MarkerControl
        currentOffices={coordinates}
        selectedOffice={selectedOffice}
        setSelectedOffice={setSelectedOffice}
      />
    </Map>
  );
};

export default MapInContactUs;
