import { store } from "@/src/store/store";
import { App } from "@/src/view/components/App";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";

const RootApp: React.FC = () => (
  <Provider store={store}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <App />
    </GestureHandlerRootView>
  </Provider>
);

export default RootApp;
