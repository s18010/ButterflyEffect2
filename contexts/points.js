import React, { createContext, useMemo, useState } from 'react';
import { View } from 'react-native';


const [pointData, setPointData] = useState([]);
export const collection = useMemo(() => {
  const col = db.collection('pointData');
})
