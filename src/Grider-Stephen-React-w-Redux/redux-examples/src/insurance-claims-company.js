console.clear();

// People dropping off a form (Action Creators)
const createPolicy = (name, amount) => {
  return { // Action (a form in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
  name: name,
  amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
 };
 
 // Reducers (Departments!)
 const claimsHistory = (oldListOfClaims = [], action) => {
   if (action.type === 'CREATE_CLAIM') {
    // we care about this action (FORM!)
    return [...oldListOfClaims, action.payload];
    }
  
  // we don't care the action (form!!)
  return oldListOfClaims;
 };
 
 // Reducers (Accounting)
 const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
 }
 
  // Reducers (Policies!)
 const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name]; 
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
    }
   return listOfPolicies;
}


 const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers ({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
})
 
const store = createStore(ourDepartments);

store.dispatch(createPolicy('Bob', 10));
store.dispatch(createPolicy('Jim', 15));
store.dispatch(createPolicy('Sally', 20));
store.dispatch(createPolicy('Sue', 40));

store.dispatch(createClaim('Sue', 25));
store.dispatch(createClaim('Soma', 100));

store.dispatch(deletePolicy('Bob'));
console.log(store.getState());