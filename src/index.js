import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// 路由配置
import { RouterProvider } from 'react-router-dom';
import router from './router';

// 主题文件
import './theme.css'

// Redux配置
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </Provider>
);
