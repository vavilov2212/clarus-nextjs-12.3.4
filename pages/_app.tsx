import "styles/globals.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { Nav } from "containers/Nav";

import store from "store/store";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("store", store);

  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
