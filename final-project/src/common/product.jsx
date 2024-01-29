import axios from 'axios';
import React from 'react';

//LẤY DATA TỪ BIẾN MÔI TRƯỜNG
const urlApi = import.meta.env.VITE_URL_API_GLOBAL;

/**
 * productList LÀ 1 FUNCTION ĐỂ CALL API
 * VÀ TRẢ VỀ 1 PROMISE
 * NẾU THÀNH CÔNG THÌ resolve NẾU THẤT BẠI THÌ reject
 * @returns
 */
export const productList = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${urlApi}/products`)
      .then((response) => {
        resolve(response?.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
