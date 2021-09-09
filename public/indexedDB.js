let db;

const request = indexedDB.open("budgetTracker", 1);

request.onsuccess = (event) => {
  console.log(request.result.name);
};