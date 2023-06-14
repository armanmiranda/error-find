import { useEffect, useState } from 'react';
import { Container } from 'components/styled-components';
import Spinner from 'components/styled-components/spinner';
import { apiCall } from 'utils/api';
import { DataContext, TPayloadData } from 'contexts/DataContext';
import { mockData } from 'mockApi';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routing';

// TODO:  remove later for testing purposes only
// const payloadApiUrl = "https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json";
const payloadApiUrl = "/payload.json";

function App() {
  const [apiData, setApiData] = useState<TPayloadData>(undefined);

  useEffect(() => {
    apiCall(payloadApiUrl).then((response) => {
      setApiData(response as TPayloadData);
    }).catch((e) => {
      // TODO: Remove later, added for deployment testing purposes only.
      // Assume that something went wrong with the api, fallback to using
      // mockApi.
      setApiData(mockData as unknown as TPayloadData);
    });
  }, []);

  if (apiData) {
    return (
      <DataContext.Provider value={apiData}>
        <RouterProvider router={router} />
      </DataContext.Provider>
    );
  } else {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }
}

export default App;
