import React from "react";
import {Map as OlMap} from "ol";


const MapContext = React.createContext<{ map?: OlMap }>({});

export default MapContext;
