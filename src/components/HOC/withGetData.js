import {useState, useEffect} from 'react';

import {_postApiFetch, getApiFetch} from '../../services/Services';

function useFetchData(bodyItem, url, type) {
  const [fetchDataSet, setFetchDataSet] = useState([]);

  const [fetchLoader, setFetchLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setFetchLoader(true);
      let bodyData = bodyItem; //[['document_employee_id', id]];

      let parm =
        type === 'post'
          ? {
              bodyData: bodyData,
              uri: url,
            }
          : {
              uri: url,
              id: bodyData,
            };

      const fetchData = await (type === 'post'
        ? _postApiFetch(parm)
        : getApiFetch(parm));

      fetchData.data.length > 0 ? setFetchDataSet(fetchData.data) : null;
      setFetchLoader(false);
    })();

    return () => {};
  }, []);

  return [fetchDataSet, fetchLoader];
}

export default useFetchData;
