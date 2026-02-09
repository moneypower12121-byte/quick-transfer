
export interface TransferData {
  id: string;
  code: string;
  name: string;
  size: number;
  type: string;
  content: string; // Base64 or Text
  createdAt: number;
  expiresAt: number;
  // maxDownloads removed - downloads are unlimited
}

export type AppState = 'IDLE' | 'SENDING' | 'RECEIVING' | 'COMPLETE';
