import React, { createContext, useReducer, useContext } from "react";

type Action =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "UPDATE_BUILDING_ID";
      payload: { buildingId: string };
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; taskId: string };
    }
  | {
      type: "MOVE_LIST";
      payload: { dragIndex: number; hoverIndex: number };
    };

export const useAppState = () => {
  return useContext(AppStateContext);
};

export interface AppState {
    
    isReadyCounter?: number
    testString: string;
    buildingId: string;
}

interface AppStateContextProps {
  state: AppState;
  dispatch: any;
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

const appData: AppState = {
  testString: "test-string",
  buildingId: "1",
};

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "UPDATE_BUILDING_ID": {
      state.buildingId = action.payload.buildingId;

      console.log("**** state updated", state);

      // return { ...state,
      //
      // }
      return state;
    }

    default: {
      return state;
    }
  }
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
