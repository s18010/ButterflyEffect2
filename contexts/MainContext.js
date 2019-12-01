import React, { createContext, useState } from 'react';
import { Text } from 'react-native';
import { db } from '../contexts/firebase';


const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [currentPoints, setPoints] = useState(0);
  const [QRScanned, setQRScanned] = useState(false);
  const [pointData, setPointData] = useState([{
    id: null,
    name: null,
    point: null,
    category: null,
    created_at: null,
  }]);

  const fetchData = () => {
    db.collection('pointData').doc('DH4QrVOoC1vQxP6mybzN').get()
      .then(doc => {
        if (!doc.exists) {
          return (
            <Text>まだポイント履歴がありません。</Text>
          );
        } else {
          setPointData(
            [{
              id: doc.data().id,
              name: doc.data().name,
              point: doc.data().point,
              category: doc.data().category,
              created_at: doc.data().created_at,
            }]);
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });
  }
  // update
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  if (month.length < 2) { month = '0' + month; }
  if (date.length < 2) { date = '0' + date; }
  const created_at = [year, month, date].join('/');

  const updateData = () => {
    db.collection('pointData').doc('Ysop1nF3acIRl0vjheOx').add({
      // db.collection('pointData').add({
      'id': 'P3',
      'name': "test3",
      'point': 2343,
      'created_at': created_at,
    })
  }

  // db.collection('pointData').doc('Ysop1nF3acIRl0vjheOx').set({
  //   'id': 'P2',
  //   'name': "test2",
  //   'point': 234,
  //   'updatedDate': updatedDate,
  // }, { merge: false })



  return (
    <MainContext.Provider value={{
      currentPoints, setPoints,
      QRScanned, setQRScanned,
      pointData, fetchData
    }}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainProvider };
