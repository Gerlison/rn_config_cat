import React, { memo, useContext } from "react";
import styled from "styled-components/native";

import { AppContext, State } from "./AppProvider";
import FeatureToggle from "./FeatureToggle";

const HomeScreen: React.FC = () => {
  const { remoteConfig } = useContext(AppContext) ?? ({} as State);

  if (remoteConfig.isLoading) {
    return (
      <S.SafeArea>
        <S.Container>
          <S.Description>Loading...</S.Description>
        </S.Container>
      </S.SafeArea>
    );
  }

  return (
    <S.SafeArea>
      <S.Container>
        <S.Title>{remoteConfig.features.config_home_title}</S.Title>
        <S.Description>
          This is the HomeScreen. You can navigate to the other screens from
          here
        </S.Description>
        <S.Row>
          <S.Card>
            <S.CardTitle>Card</S.CardTitle>
          </S.Card>
          <S.Card>
            <S.CardTitle>Card</S.CardTitle>
          </S.Card>
        </S.Row>
        <S.Description>This is a card group description</S.Description>

        <FeatureToggle
          flag="feature_card_enabled"
          renderLoading={<S.Description>Loading</S.Description>}
          renderTruthy={
            <>
              <S.Row>
                <S.Card>
                  <S.CardTitle>Paying user Card</S.CardTitle>
                </S.Card>
                <S.Card>
                  <S.CardTitle>Paying user Card</S.CardTitle>
                </S.Card>
              </S.Row>
              <S.Description>This is a card group description</S.Description>
            </>
          }
          renderFalsy={
            <S.Description style={{ fontWeight: "bold" }}>
              Buy now!
            </S.Description>
          }
        />
      </S.Container>
    </S.SafeArea>
  );
};

const S = {
  SafeArea: styled.SafeAreaView`
    flex: 1;
  `,
  Container: styled.View`
    flex: 1;
    padding: 16px;
  `,
  Row: styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
  `,
  Title: styled.Text`
    font-size: 24px;
    font-weight: bold;
  `,
  Description: styled.Text`
    font-size: 16px;
    margin-top: 8px;
  `,
  Card: styled.View`
    flex: 1;
    height: 100px;
    background-color: #fff;
    border-radius: 8px;
    margin-top: 16px;
    margin-right: 16px;
    padding: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `,
  CardTitle: styled.Text`
    font-size: 16px;
    font-weight: bold;
  `,
};

export default memo(HomeScreen);
