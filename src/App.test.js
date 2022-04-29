import { render, screen } from '@testing-library/react';

import { Provider } from "react-redux";
import App from './App';
import store from "./redux/store";

test('App should be render', () => {
  const { getByTestId } = screen;
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(getByTestId("AppTest")).toBeInTheDocument();
});
