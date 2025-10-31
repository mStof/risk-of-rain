import { child, get, getDatabase, push, ref, set } from "firebase/database";
import { userSchemaType } from "@/utils/schemas/userForm";
import { app } from "./FirebaseConfig";

const useRealTimeFirebase = () => {
  const db = getDatabase(app);
  const tableRef = ref(db, "userWeb/");

  const insertUser = async (data:userSchemaType) => {
    const table = push(child(tableRef, "user"));
    try {
      const res = await set(table, data);
      console.log("ResInsertUser: ", res);
      return res;

    } catch (error) {
      console.error("Erro ao inserir usuário:", error);
    }

  };
  const selectUser = async (cpf:string) => {
    const table = cpf ? child(tableRef, `/${cpf}`) : tableRef;
    try {
      const data = await get(table);
      console.log(data);
      if (!data.exists()) return false;
      return data.val();
    } catch (error) {
      console.error("Erro ao selecionar usuário:", error);
    }
  };

  const updateUser = () => {};
  const deleteUser = () => {};

  return { insertUser, selectUser, updateUser, deleteUser };
};

export {useRealTimeFirebase};