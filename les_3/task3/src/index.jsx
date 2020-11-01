import store from './store';

import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions';

// store.subscribe(() => console.log(store.getState()));

// store.dispatch(setUser({ id: 76, name: 'Sarah' }));
// store.dispatch(addProduct({ id: 14, name: 'milk' }));
// store.dispatch(addProduct({ id: 12, name: 'coconut' }));
// store.dispatch(addProduct({ id: 5, name: 'bread' }));
// store.dispatch(setLanguage('jp'));
// store.dispatch(setLanguage('ua'));

// store.dispatch(removeProduct(14));
// store.dispatch(removeUser({ id: 76 }));