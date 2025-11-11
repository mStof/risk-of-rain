import {
  child,
  get,
  getDatabase,
  onValue,
  push,
  ref,
  set,
  update
} from "firebase/database";
import { app } from "./FirebaseConfig";
import { userSchemaUpdateType } from "@/utils/schemas/userFormUpdate";

type type = userSchemaUpdateType & { id: string };

const useRealTimeFirebase = () => {
  const db = getDatabase(app);
  const tableRef = ref(db, "userWeb/");
  // console.log(db);

  const insertUser = async (data: userSchemaUpdateType) => {
    const table = push(child(tableRef, "user"));
    try {
      const res = await set(table, data);
      console.log("ResInsertUser: ", res);
      return res;
    } catch (error) {
      console.error("Erro ao inserir usuário:", error);
    }
  };
  const selectUser = async (id?: string) => {
    try {
      const data = await get(child(tableRef, "user"));
      const obj = data.toJSON();
      if (obj === null) return [];
      const keys = Object.keys(obj);
      const values = Object.values(obj);
      const newArr: type[] = [];
      for (let i = 0; i < keys.length; i++) {
        newArr.push({ id: keys[i], ...values[i] });
      }
      if (!id) return newArr;
      const user = newArr.filter(({ email }) => email === id);
      return user;
    } catch (error) {
      console.error("Erro ao selecionar usuário:", error);
    }
  };


  const updateUser = async (dataUser: userSchemaUpdateType) => {
    const data = await selectUser(dataUser.email);

    if (!data) return;
    if (!data[0]) return alert("Usuário não existe!");

    const { id } = data[0];

    try {
      await update(child(tableRef, `user/${id}`), dataUser);
      return true;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };
  const deleteUser = () => {};

  return { insertUser, selectUser, updateUser, deleteUser };
};

export { useRealTimeFirebase };
