# Folder-tree


```

├── .github/
|   ├── ISSUE_TEMPLATE/
|   |   ├── feature_request.md
|   |   └── new-data-template.md
|   ├── workflows/
|   |   └── ci.yml
|   ├── CODEOWNERS
|   ├── PULL_REQUEST_TEMPLATE.md
├── .vscode/
|   └── settings.json
├── config
|   └── alias.js
├── docs/
|   ├── folder-tree.md
├── docker/
|   ├── Dockerfile
├── public
|   ├── favicon.ico
|   └── manifest.json
└── src/
    ├── __test__/
    |   ├── helpers
    |   |   ├── libraries/
    |   |   |   └── reactRouterDom.ts
    |   |   ├── mocks/
    |   |   |  ├── comparison.ts
    |   |   |  ├── districtHighlighted.ts
    |   |   |  ├── districtSelect.ts
    |   |   |  ├── index.ts
    |   |   |  ├── sidebar.ts
    |   |   |  ├── stateHighlighted.ts  
    |   |   |  └── stateSelected.ts
    |   |   ├── providers/
    |   |   |   ├── index.tsx
    |   |   |   └── Providers.tsx
    |   |   └── render.tsx   
    |   └── setup.ts    
    ├── assets/
    |   ├── contribuitors/
    |   |   ├── alex_sandy.png
    |   |   ├── alina_flores.jpeg
    |   |   ├── ana_beatriz.jpeg
    |   |   ├── andreon_magagna.jpg
    |   |   ├── ariano_bangemann.png
    |   |   ├── avatar_icon.svg
    |   |   ├── carla_netto.jpg
    |   |   ├── enzo_gabriel.jpeg
    |   |   ├── fernanda_klein.jpg
    |   |   ├── jaiany_rocha.jpg
    |   |   ├── jessica_miranda.jpg
    |   |   ├── jheniffer_lucas.jpeg
    |   |   ├── julio_cesar.jfif
    |   |   ├── justin_anderson.png
    |   |   ├── leonardo_gomes.jpg
    |   |   ├── luiz_meneguetti.jpg
    |   |   ├── mohsen_bahrami.png
    |   |   ├── pedro_conto.png
    |   |   ├── rafael_pereira.jpg
    |   |   ├── ricardo_limongi.jpg
    |   |   ├── ruth_selina.jpg
    |   |   ├── valderson_junior.jpeg
    |   |   ├── vilmar_boff.png
    |   |   └── vinicius_brei.jpg
    |   ├── institutions/
    |   |   ├── logoBologna.png
    |   |   ├── logoNCF.png
    |   |   ├── logoNegativaFGV.png
    |   |   ├── logoNegativaMIT.png
    |   |   ├── logoSabanciNormal.png
    |   |   ├── logoTramontinaNegativo.png
    |   |   ├── logoUfgNegativo.png
    |   |   ├── logoUfrgsNegativo.png
    |   |   └── logoUnb.png
    |   ├── utils/
    |   |   ├── chevron_white.svg
    |   |   ├── chevron.svg
    |   |   └── compare.svg
    ├── components/
    |   ├── Collapsible/
    |   |   ├── Collapsible.tsx
    |   |   ├── index.tsx
    |   |   ├── styles.tsx
    |   |   ├── styles.ts
    |   |   └── type.ts
    |   ├── ComparisonMode/
    |   |   ├── GridMode/
    |   |   |   ├── GridContent/
    |   |   |   |   ├── GridContent.tsx
    |   |   |   |   ├── index.tsx
    |   |   |   |   └── styles.ts
    |   |   |   ├── GridMode.tsx
    |   |   |   ├── index.tsx
    |   |   |   └── styles.ts
    |   |   ├── TableMode/
    |   |   |   ├── Header/
    |   |   |   |   ├── Header.tsx
    |   |   |   |   ├── index.tsx
    |   |   |   |   └── styles.ts
    |   |   |   ├── TableContent/
    |   |   |   |   ├── index.tsx
    |   |   |   |   ├── styles.ts
    |   |   |   |   └── TableContent.tsx
    |   |   |   ├── index.tsx
    |   |   |   ├── styles.ts
    |   |   |   └── TableMode.tsx
    |   |   ├── ComparisonMode.tsx
    |   |   ├── index.tsx
    |   |   └── styles.ts
    |   ├── Drawer/
    |   |   ├── Drawer.tsx
    |   |   ├── index.tsx
    |   |   └── styles.ts
    |   ├── Footer/
    |   |   ├── tests/
    |   |   |   └── Footer.spec.tsx
    |   |   ├── utils/
    |   |   |   └── institutions.ts
    |   |   ├── Footer.tsx
    |   |   ├── index.tsx
    |   |   └── styles.ts
    |   ├── Header/
    |   |   ├── ComparisionControl/
    |   |   |   ├── ComparisionControl.spec.tsx
    |   |   |   ├── ComparisionControl.tsx
    |   |   |   ├── index.tsx
    |   |   |   └── styles.ts
    |   |   ├── LayerRoute/
    |   |   |   ├── tests/
    |   |   |   |   └── LayerRoutes.spec.tsx
    |   |   |   ├── index.tsx
    |   |   |   ├── LayerRoute.tsx
    |   |   |   └── styles.ts
    |   |   ├── ProjectInformations/
    |   |   |   ├── tests/
    |   |   |   |   └── ProjectInformations.spec.tsx
    |   |   |   ├── const.ts
    |   |   |   ├── index.tsx
    |   |   |   ├── ProjectInformations.tsx
    |   |   |   └── styles.ts
    |   |   ├── SeachBar/
    |   |   |   ├── hook/
    |   |   |   |   └── useSeach.ts
    |   |   |   ├── SeachBarPopper/
    |   |   |   |   ├── index.tsx
    |   |   |   |   ├── popper-modifiers.ts
    |   |   |   |   ├── SeachBarPopper.tsx
    |   |   |   |   └── styles.ts
    |   |   |   ├── index.tsx
    |   |   |   ├── SeachBar.tsx
    |   |   |   ├── styles.ts
    |   |   |   └── utils.ts
    |   |   ├── tests/
    |   |   |   └── Header.spec.tsx
    |   |   ├── Header.tsx
    |   |   ├── index.tsx
    |   |   └── styles.ts
    |   ├── InformationsBar/
    |   |   ├── CloroplethLegend/
    |   |   |   ├── CloroplethLegend.spec.tsx
    |   |   |   ├── CloroplethLegend.tsx
    |   |   |   ├── index.tsx
    |   |   |   └── styles.ts
    |   |   ├── SummaryCard/
    |   |   |   ├── index.tsx
    |   |   |   ├── styles.ts
    |   |   |   ├── SummaryCard.spec.tsx
    |   |   |   └── SummaryCard.tsx
    |   |   ├── index.tsx
    |   |   ├── InformationsBar.spec.tsx
    |   |   ├── InformationsBar.tsx
    |   |   └── styles.ts
    |   ├── Map/
    |   |   ├── ClickablePopup/
    |   |   |   ├── ClickablePopup.tsx
    |   |   |   ├── index.tsx
    |   |   |   └── styles.ts
    |   |   ├── hook/
    |   |   |   ├── useDistrictLayer/
    |   |   |   |   ├── const.ts
    |   |   |   |   ├── districtActions.ts
    |   |   |   |   ├── index.tsx
    |   |   |   |   └── useDistrictLayer.tsx
    |   |   |   └── useStateLayer/
    |   |   |       ├── const.ts
    |   |   |       ├── stateActions.ts
    |   |   |       ├── index.tsx
    |   |   |       └── useStateLayer.tsx
    |   |   ├── utils/
    |   |   |   ├── actions.ts
    |   |   |   └── conts.ts
    |   |   ├── index.tsx
    |   |   ├── Map.tsx
    |   |   └── styles.ts
    |   ├── MetricDetails/
    |   |   ├── Bar/
    |   |   |   ├── SolidBar/
    |   |   |   |   ├── index.tsx
    |   |   |   |   └── SolidBar.tsx
    |   |   |   ├── Bar.tsx
    |   |   |   ├── index.tsx
    |   |   |   └── styles.ts
    |   |   ├── tests/
    |   |   |   ├──  MetricDetails.spec.tsx
    |   |   |   ├── mock.ts
    |   |   ├── index.tsx
    |   |   └── MetricDetails.tsx
    |   ├── Modal/
    |   |   ├── AboutTheAtlas/
    |   |   |   ├── AboutTheAtlas.tsx
    |   |   |   └── index.tsx
    |   |   ├── Contributors/
    |   |   |   ├── Contributors.tsx
    |   |   |   ├── ContributorsData.ts
    |   |   |   ├── index.tsx
    |   |   |   └── styles.ts
    |   |   ├── ModalCOntainer/
    |   |   |   ├── index.tsx
    |   |   |   ├── ModalContainer.tsx
    |   |   |   └── styles.ts
    |   |   ├── index.tsx
    |   |   └── Modal.tsx
    |   ├── SideBar/
    |   |   ├── ComparisonButton/
    |   |   |   ├── ComparisonButton.tsx
    |   |   |   ├── index.tsx
    |   |   |   └── styles.ts
    |   |   ├── ComparisonDetails/
    |   |   |   ├── ComparisonDetails.tsx
    |   |   |   ├── index.tsx
    |   |   |   ├── styles.css
    |   |   |   └── styles.ts
    |   |   ├── Minimizer/
    |   |   |   ├── index.tsx
    |   |   |   ├── Minimizer.tsx
    |   |   |   └── styles.ts
    |   |   ├── RegionDetails/
    |   |   |   ├── CollapsibleContent.tsx
    |   |   |   ├── ComparisonSection.tsx
    |   |   |   ├── DataSection.tsx
    |   |   |   ├── index.tsx
    |   |   |   ├── RegionDetails.tsx
    |   |   |   └── styles.ts
    |   |   ├── tests/
    |   |   |   ├── mock.ts
    |   |   |   └── Sidebar.spec.tsx
    |   |   ├── index.tsx
    |   |   ├── SideBar.tsx
    |   |   └── Modal.tsx
    |   └── Theme/
    |       ├── index.tsx
    |          └── palette.ts
    ├── config/
    |   ├── demographic.ts
    |   ├── economic.ts
    |   ├── index.ts
    |   ├── social.ts
    |   └── socioeconomic.ts
    ├── context/
    |   ├── district/
    |   |   ├── highlightedContext.tsx
    |   |   └── selectedContext.tsx
    |   ├── state/
    |   |   ├── highlightedContext.tsx
    |   |   └── selectedContext.tsx
    |   ├── comparisonContext.tsx
    |   └── sidebarContext.tsx
    ├── customTypes/
    |   ├── district.ts
    |   ├── map.ts
    |   └── state.ts
    ├── data/
    |   ├── states/
    |   |   ├── AC_Municipios_2020.json
    |   |   ├── AL_Municipios_2020.json
    |   |   ├── AM_Municipios_2020.json
    |   |   ├── AP_Municipios_2020.json
    |   |   ├── BA_Municipios_2020.json
    |   |   ├── CE_Municipios_2020.json
    |   |   ├── DF_Municipios_2020.json
    |   |   ├── ES_Municipios_2020.json
    |   |   ├── GO_Municipios_2020.json
    |   |   ├── index.ts
    |   |   ├── MA_Municipios_2020.json
    |   |   ├── MG_Municipios_2020.json
    |   |   ├── MS_Municipios_2020.json
    |   |   ├── MT_Municipios_2020.json
    |   |   ├── PA_Municipios_2020.json
    |   |   ├── PB_Municipios_2020.json
    |   |   ├── PI_Municipios_2020.json
    |   |   ├── PR_Municipios_2020.json
    |   |   ├── RJ_Municipios_2020.json
    |   |   ├── RN_Municipios_2020.json
    |   |   ├── RR_Municipios_2020.json
    |   |   ├── RS_Municipios_2020.json
    |   |   ├── SC_Municipios_2020.json
    |   |   ├── SE_Municipios_2020.json
    |   |   ├── SP_Municipios_2020.json
    |   |   └── TO_Municipios_2020.json
    |   ├── BR_UF_2020.json
    |   ├── Data.json
    |   ├── ExtremePopValueByState.json
    |   ├── GeoSes.json
    |   └── StateData.json
    ├── hook/
    |   ├── useFeature.ts
    |   └── useMap.ts
    ├── pages/Main/
    |   ├── hook/
    |   |   ├──  index.ts   
    |   |   └── useMain.tsx 
    |   ├── index.tsx
    |   ├── Main.tsx
    |   └── styles.ts
    ├── utils/
    |   ├── coloManipulator.ts
    |   └──formatValue.ts
    ├── index.tsx
    └──main.tsx 
    
 ``` 
 
## About folders of project

    src/

The src folder contains the structure of the codes and the project divided in many smaller parts for a better understandment of the structures that make up the Atlas.

    src/test/

This fodler includes test functions for a good developmento of the project and mocks for development and tests.

    src/assets/

This folder has static files, like images.

    src/components/

This folder is responsible for the structure of the code that composes functions that define and create elements that act on all map funcionalities of Atlas.

    src/config/ 

This folder has structures defined for cities, states and country for Atlas visualization.

    src/context/

Division of function specific for districts and state, used for global management.

    src/customTypes/

Modules made to define a standard used for districts, states and maps. 

    src/data/ 

Folder that stores JSON data used on the project.

    src/pages/

This folder has all the visuals of the pages that are displayed on Atlas.



