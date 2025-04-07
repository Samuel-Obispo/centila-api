// firebase.service.ts
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as serviceAccount from './iot-sm42-firebase-adminsdk-fowu2-03540f52d7.json';

@Injectable()
export class FirebaseService {
  private db: admin.database.Database;

  constructor() {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
        databaseURL: "https://iot-sm42-default-rtdb.firebaseio.com"
      });
    }

    this.db = admin.database();
  }

  async getData(path: string): Promise<any> {
    const ref = this.db.ref(path);
    const snapshot = await ref.once('value');
    return snapshot.val();
  }
  
}