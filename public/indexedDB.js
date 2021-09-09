let db;
// requesting DB instance
const request = indexedDB.open("budgetTracker", 1);

// creating an object store
request.onupgradeneeded = ({ target }) => {
  const db = target.result;
  if (!db.objectStoreNames.contains('budgetStore')) {
    db.createObjectStore("budgetStore", { autoIncrement: true });
  }
};

// creating onsuccess
request.onsuccess = ({ target }) => {
  console.log(request.result.name);
  db = target.result;
  if (navigator.onLine) {
    console.log('Backend online!');
    checkDatabase();
  }
};

// if error occurs
request.onerror = (event) => {
  console.log(`Error - ${event.target.errorCode}`);
};

const checkDatabase = () => {
  console.log('Checking database');
  // opening a transaction on budgetStore db
  let transaction = db.transaction(['budgetStore'], 'readwrite');
  // access to budgetStore object
  const store = transaction.objectStore('budgetStore');
  // get all records from store as getAll variable
  const getAll = store.getAll();

  // if request successful
  getAll.onsuccess = function () {
    // if items in store then bulk add them once app is back online
    if (getAll.result.length > 0) {
      fetch('api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((res) => {
          // if return response not empty
          if (res.length !== 0) {
            // open another transaction
            transaction = db.transaction(['budgetStore', 'readwrite']);
            const currentStore = transaction.objectStore('budgetStore');
            // clear existing entries for our bulk add
            currentStore.clear();
            console.log('Clearing store')
          }
        })
    }
  };
}

const saveRecord = (record) => {
  console.log('Saving record');
  // creating a transaction on budgetStore db
  const transaction = db.transaction(['budgetStore'], 'readwrite');
  // access to budgetStore object
  const store = transaction.objectStore('budgetStore');
  // add record to store
  store.add(record);
};

// listen for app to come back online
window.addEventListener('online', checkDatabase);