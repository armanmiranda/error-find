import { useEffect, useState } from 'react';
import { Homepage } from '../Homepage';
import { Container } from 'components/styled-components';
import Spinner from 'components/styled-components/spinner';
import { apiCall } from 'utils/api';
import { DataContext, TPayloadData } from 'contexts/DataContext';
import { mockData } from 'mockApi';

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

  if (apiData && Object.keys(apiData).length > 0) {
    return (
      <DataContext.Provider value={apiData}>
        <Container>
          <Homepage />
        </Container>
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
