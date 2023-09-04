import React, { FC, memo } from 'react';
import { Marker, Popup } from 'react-map-gl';

import { IMarkerControl } from './interface';

import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './styles.module.scss';

export const MarkerControl: FC<IMarkerControl> = memo(
  ({ currentOffices, selectedOffice, setSelectedOffice }) => {
    const onClosePopupHandler = () => {
      setSelectedOffice(null);
    };

    return currentOffices?.map(office => (
      <Marker
        key={office.gps[0]}
        longitude={office.gps[1]}
        latitude={office.gps[0]}
        anchor='center'
        pitchAlignment='viewport'
      >
        <div
          className={styles.locationImg}
          onClick={e => {
            e.preventDefault();
            setSelectedOffice(office);
          }}
        />

        {selectedOffice === office && (
          <Popup
            longitude={office.gps[1]}
            latitude={office.gps[0]}
            onClose={onClosePopupHandler}
            closeButton
            closeOnClick={false}
          >
            <div className={styles.popupBlock}>
              <div className={styles.officeName}>{selectedOffice.popUp}</div>
            </div>
          </Popup>
        )}
      </Marker>
    ));
  },
);
