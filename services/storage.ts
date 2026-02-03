
import { TransferData } from '../types';

const STORAGE_KEY = 'quicktransfer_data';

export const generateCode = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const saveData = (data: TransferData): void => {
  const existing = getStore();
  existing.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
};

export const getDataByCode = (code: string): TransferData | undefined => {
  const store = getStore();
  const now = Date.now();
  // Filter out expired (10 min expiry for demo)
  return store.find(item => item.code === code && item.expiresAt > now);
};

const getStore = (): TransferData[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
