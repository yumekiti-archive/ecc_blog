import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { SWRConfig } from 'swr';
import { fetchInstance } from './libs/fetchInstance';

import List from './components/pages/List';
import Detail from './components/pages/Detail';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetchInstance()
            .get(resource, init)
            .then((res) => res.data),
      }}
    >
      <Routes>
        <Route path="/" element={<List path="content" />} />
        <Route path="/curate" element={<List path="curate" />} />
        <Route path="/infrastructure" element={<List path="content/infrastructure" />} />
        <Route path="/development" element={<List path="content/development" />} />
        <Route path="/content/:id" element={<Detail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </SWRConfig>
  );
};

export default App;
