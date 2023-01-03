# Folder-tree


```

├── docker/
|   └── Dockerfile
└── src/  
    Component/
    |   ├── tests/
    |   ├── utils/
    |   ├── Component.tsx
    |   ├── index.tsx
    |   ├── styles.tsx 
    |   └── type.ts
    ├── Config/
    ├── Context/
    ├── CustomTypes/
    |   ├── district.ts
    |   ├── map.ts
    |   └── state.ts
    ├── Data/
    |   ├── states/
    |   |   ├── AC_Municipios_2020
    |   |   ├── AL_Municipios_2020
    |   |   ├── AM_Municipios_2020
    |   |   ├── AP_Municipios_2020
    |   |   ├── BA_Municipios_2020
    |   |   ├── CE_Municipios_2020
    |   |   ├── DF_Municipios_2020
    |   |   ├── ES_Municipios_2020
    |   |   ├── GO_Municipios_2020
    |   |   ├── index
    |   |   ├── MA_Municipios_2020
    |   |   ├── MG_Municipios_2020
    |   |   ├── MS_Municipios_2020
    |   |   ├── MT_Municipios_2020
    |   |   ├── PA_Municipios_2020
    |   |   ├── PB_Municipios_2020
    |   |   ├── PI_Municipios_2020
    |   |   ├── PR_Municipios_2020
    |   |   ├── RJ_Municipios_2020
    |   |   ├── RN_Municipios_2020
    |   |   ├── RR_Municipios_2020
    |   |   ├── RS_Municipios_2020
    |   |   ├── SC_Municipios_2020
    |   |   ├── SE_Municipios_2020
    |   |   ├── SP_Municipios_2020
    |   |   └── TO_Municipios_2020
    |   ├── BR_UF_2020
    |   ├── Data
    |   ├── ExtremePopValueByState
    |   ├── GeoSes
    |   └── StateData
    ├── Hook/
    |   ├── useFeature.ts
    |   └── useMap.ts
    ├── Pages/
    |   ├── hook/
    |   ├── utils/
    |   ├── index.tsx
    |   ├── Pages.tsx
    |   └── styles.ts
    ├── Utils/
    |   ├── coloManipulator.ts
    |   └──formatValue.ts
    ├── index.tsx
    └──main.tsx 
    
 ``` 
 
## About folders of project

`src/`: The src folder contains the structure of the codes and the project divided in many smaller parts for a better understandment of the structures that make up the Atlas.

`src/components/`: This folder is responsible for the structure of the code that composes functions that define and create elements that act on all map funcionalities of Atlas.

`src/config/`:  This folder has structures defined for cities, states and country for Atlas visualization.

`src/context/`: Division of function specific for districts and state, used for global management.

`src/customTypes/`: Modules made to define a standard used for districts, states and maps. 

`src/data/`: Folder that stores JSON data used on the project.

`src/hook/`: this folder is responsible for using the districts, cities and states that are being shown in the atlas.

`src/pages/`: This folder has all the visuals of the pages that are displayed on Atlas.

`src/utils/`: this folder contains the formatting for the composite structures in the atlas from the cities to the colors shown in the projects




