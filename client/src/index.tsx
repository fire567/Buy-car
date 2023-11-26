import { createRoot } from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import reducers from "./Redux/reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";

const store = createStore(reducers, applyMiddleware(thunk));

const rootNodeId = "root";

const container = document.getElementById(rootNodeId);

if (!container) {
    throw new Error(`Не найден Dom элемент с ${rootNodeId} `);
}

const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
