import { Databases, Permission, Role } from "appwrite";
import { client } from "./authentication";

const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
export const STREAK_COL_ID = process.env.NEXT_PUBLIC_APPWRITE_STREAK_COLLECTION_ID;
export const HABIT_COL_ID = process.env.NEXT_PUBLIC_APPWRITE_HABIT_COLLECTION_ID;

const permissions = [];
permissions.push(Permission.write(Role.users()));
permissions.push(Permission.update(Role.users()));

const databases = new Databases(client);

// document id = userid
export const _getDocument = async function (userid, COL_ID) {
  try {
    const document = await databases.getDocument(DB_ID, COL_ID, userid);
      return document;
  } catch (error) {
  }
};

// document id = userid
export const _updateStreaks = async function (doc_id, streak) {
  console.log(streak)
  try {
    await databases.updateDocument(DB_ID, STREAK_COL_ID, doc_id, streak);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// document id = userid
export const _createDocumentinHabitCol = async function (doc_id, data) {
  try {
    console.log(HABIT_COL_ID, doc_id, data)
    return await databases.createDocument(DB_ID, HABIT_COL_ID, doc_id, data, permissions);
  } catch (error) {
    throw error;
  }
};

// document id = userid
export const _createDocumentinStreakCol = async function (doc_id) {
  try {
    return await databases.createDocument(DB_ID, STREAK_COL_ID, doc_id, {streakcount : 0}, permissions);
  } catch (error) {
    throw error;
  }
};
