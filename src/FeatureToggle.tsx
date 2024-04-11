import { memo, useContext } from "react";

import { AppContext, State } from "./AppProvider";

interface Props {
  flag: keyof State["remoteConfig"]["features"];
  renderLoading: JSX.Element;
  renderTruthy: JSX.Element;
  renderFalsy?: JSX.Element | null;
}

const FeatureToggle = ({
  flag,
  renderFalsy = null,
  renderLoading,
  renderTruthy,
}: Props) => {
  const { remoteConfig } = useContext(AppContext) ?? ({} as State);

  if (remoteConfig.isLoading) {
    return renderLoading;
  }

  if (remoteConfig.features[flag]) {
    return renderTruthy;
  }

  return renderFalsy;
};

export default memo(FeatureToggle);
