import React from "react";
import './map.scss';
import {YMapContainer} from "./Ymap/Custom";

export const Maps = () => {

    return (
        <div className='map'>
            <p>Выбор на карте:</p>
            <YMapContainer/>
            {/*<YMaps*/}
            {/*    query={{ // для подключения апи ключа. load: 'package.full' - используем все пакеты*/}
            {/*        ns: 'use-load-option',*/}
            {/*        apikey: 'af28acb6-4b1c-4cd1-8251-b2f67a908cac',*/}
            {/*        load: 'package.full'*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Map*/}
            {/*        state={mapState}*/}
            {/*        width={"100%"}*/}
            {/*        defaultState={{*/}
            {/*            center: [54.3187, 48.3978],*/}
            {/*            zoom: 12,*/}
            {/*            load: 'package.full',*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <ObjectManager*/}
            {/*            options={{*/}
            {/*                clusterize: true,*/}
            {/*            }}*/}
            {/*            objects={{*/}
            {/*                openBalloonOnClick: true,*/}
            {/*                preset: 'islands#greenDotIcon',*/}
            {/*            }}*/}
            {/*            clusters={{*/}
            {/*                preset: 'islands#greenClusterIcons',*/}
            {/*            }}*/}
            {/*            modules={[*/}
            {/*                'objectManager.addon.objectsBalloon',*/}
            {/*                'objectManager.addon.objectsHint'*/}
            {/*            ]}*/}
            {/*            defaultFeatures={geoObjects.features}*/}
            {/*        />*/}
            {/*    </Map>*/}
            {/*</YMaps>*/}
        </div>
    )
}






