import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const getResources = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`,
    );

    setResources(response.data);
  };

  useEffect(
    () => {
      getResources(resource);
    },
    [resource],
  );

  return <div>{resources.length}</div>;
};

export default ResourceList;
