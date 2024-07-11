interface StsTokenManager {
    accessToken: string;
    expirationTime: number;
    refreshToken: string;
  }
  
  export interface User {
    _redirectEventId?: any; // `undefined` is explicitly typed as any or possibly undefined
    apiKey?: string;
    appName?: string;
    createdAt?: string; // Assuming the number is actually a string timestamp
    displayName?: any; // `undefined` is explicitly typed as any or possibly undefined
    email: string | null;
    emailVerified: boolean;
    isAnonymous: boolean;
    lastLoginAt?: string; // Assuming the number is actually a string timestamp
    phoneNumber?: any; // `undefined` is explicitly typed as any or possibly undefined
    photoURL?: any; // `undefined` is explicitly typed as any or possibly undefined
    providerData: any[]; // Assuming the array contains objects, but type specifics are not provided
    stsTokenManager?: StsTokenManager;
    tenantId?: any; // `undefined` is explicitly typed as any or possibly undefined
    uid: string;
  }