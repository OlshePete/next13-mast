import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Box } from '@chakra-ui/react';

const YandexMap = () => {
    const defaultState = {
        center: [59.948803, 30.341704],
        zoom: 15,
        controls: [
            "zoomControl",
        ],
    };

    const modules = [
        "control.ZoomControl",
    ];

    const mapOptions = {
        restrictMapArea: true,
        suppressMapOpenBlock: true,
    };

    return (
        <Box position="relative" width="100%" height="100%">
            <YMaps>
                <Map
                    options={mapOptions}
                    width="100%"
                    height="100%"
                    defaultState={defaultState}
                    modules={modules}
                >
                    <Placemark geometry={defaultState.center} />
                </Map>
            </YMaps>
            <Box
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(45deg, rgb(253, 198, 19) 30%, #3a5abd 90%)",
                    opacity: 0.2,
                    pointerEvents: "none",
                }}
            />
        </Box>
    );
};

export default YandexMap;
