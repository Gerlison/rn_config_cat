import React, { createContext, useState, useEffect } from "react";

import remoteConfig from "./infra/remoteConfig";

export interface State {
  remoteConfig: {
    isLoading: boolean;
    features: {
      feature_card_enabled?: boolean;
      config_home_title?: string;
    };
  };
}

const INITIAL_STATE: State = {
  remoteConfig: {
    isLoading: false,
    features: {
      feature_card_enabled: false,
      config_home_title: "Home Sweet Home",
    },
  },
};

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<State>(INITIAL_STATE);

export default function AppProvider({ children }: Props) {
  const [state, setState] = useState<State>(INITIAL_STATE);

  useEffect(() => {
    setState((old) => ({
      remoteConfig: { ...old.remoteConfig, isLoading: true },
    }));

    remoteConfig.readAll({ identifier: "123" }).then((result) => {
      const newFlags = result.reduce(
        (prev, curr) => ({
          ...prev,
          [curr.settingKey]: curr.settingValue,
        }),
        {} as State["remoteConfig"]["features"]
      );

      setState((old) => ({
        ...old,
        remoteConfig: {
          ...old.remoteConfig,
          features: newFlags,
          isLoading: false,
        },
      }));
    });
  }, []);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}
