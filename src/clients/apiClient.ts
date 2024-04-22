import apiUrl from "../config/api";
import Codelab from "../types/Codelab";
import User from "../types/User";

const apiClient = {
  join: (name: string, telegram: string) => {
    return new Promise<void>(async (resolve, reject) => {
      const body = JSON.stringify({ name, telegram });

      try {
        const call = await fetch(`${apiUrl}/users/join`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body,
        });

        const response = await call.json();

        if (!call.ok) {
          reject(response);
        }

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  },
  getCodelabs: () => {
    return new Promise<Codelab[]>(async (resolve, reject) => {
      try {
        const telegram = localStorage.getItem("telegram");
        const call = await fetch(`${apiUrl}/users/${telegram}/codelabs`);

        const response = await call.json();

        if (!call.ok) {
          reject(response);
        }

        resolve(response.codelabs);
      } catch (error) {
        reject(error);
      }
    });
  },
  getRanking: () => {
    return new Promise<User[]>(async (resolve, reject) => {
      try {
        const call = await fetch(`${apiUrl}/users/ranking`);

        const response = await call.json();

        if (!call.ok) {
          reject(response);
        }

        resolve(response.users);
      } catch (error) {
        reject(error);
      }
    });
  },
  collectCodelab: (qrCode: string) => {
    return new Promise<void>(async (resolve, reject) => {
      const telegram = localStorage.getItem("telegram");
      const body = JSON.stringify({ telegram, qrCode });

      try {
        const call = await fetch(`${apiUrl}/codelabs`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body,
        });

        const response = await call.json();

        if (!call.ok) {
          reject(response);
        }

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default apiClient;
