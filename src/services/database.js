import firebase from "firebase";
import "firebase/firestore";
import "core-js/stable";
import "regenerator-runtime/runtime";

// FUNCIONES PROPIAS DE FIREBSE DATABASE FIRESTORE
function parseDoc(doc) {
  return {
    id: doc.id,
    ...doc.data(),
  };
}
let db;
function getDbInstance() {
  if (!db || db._isTerminated) {
    db = firebase.firestore();
  }
  return db;
}

async function addItem(collection, item) {
  const db = getDbInstance();
  const result = await db.collection(collection).add(item);
  return !!result.id;
}

async function addItemWithId(collection, item, id) {
  db = getDbInstance();
  const result = await db.collection(collection).doc(id).set(item);
  console.log("CONTACT WITH ID ADDED.");
  return !result;
}

async function getAll(collection) {
  const db = getDbInstance();
  const collectionData = await db.collection(collection).get();

  const results = [];
  collectionData.forEach((document) => {
    results.push(parseDoc(document));
  });

  return results;
}

async function getAllRealTime({ collection, filters, callback }) {
  const db = getDbInstance();
  const dbCollection = db.collection(collection);
  const collectionFiltered = dbCollection.where(
    filters.field,
    filters.condition,
    filters.value
  );
  const llamaACallBackWithData = (collectionData) => callback(collectionData);
  collectionFiltered.onSnapshot(llamaACallBackWithData);
}

async function deleteItem(collection, itemId) {
  const db = getDbInstance();
  const result = await db.collection(collection).doc(itemId).delete();
  console.log("CONTACT DELETED.");
  return !result;
}

async function updateItemPhone(collection, itemId, value) {
  const db = getDbInstance();
  const result = await db
    .collection(collection)
    .doc(itemId)
    .update({ numContact: value });
  return !result;
}

export {
  getDbInstance,
  addItem,
  addItemWithId,
  getAll,
  getAllRealTime,
  deleteItem,
  updateItemPhone,
};
