import React from "react";
import { createStore, bindActionCreators } from "redux";
import * as actions from "./actions";
import { reducer } from "./reducer";

function App() {
	const store = createStore(reducer);
	const { dispatch, subscribe, getState } = store;

	
	const update = () =>
		(document.getElementById("counter").textContent =
			getState().value);

	subscribe(update);

	// const bindActionCreator = (creator, dispatch) => (...args) => {
	// 	dispatch(creator(...args))
	// }

	const {inc, dec ,rnd} = bindActionCreators(actions, dispatch)
	// const decDispatch = bindActionCreators(dec, dispatch)
	// const rndDispatch = bindActionCreators(rnd, dispatch)


	document.getElementById("inc").addEventListener("click", inc);
	document.getElementById("dec").addEventListener("click", dec);
	document.getElementById("rnd").addEventListener("click", () => {
		const value = Math.floor(Math.random() * 10);
		rnd(value);
	});

	///////
	// console.log(store.getState());

	// let state = reducer(initialState, { type: "INC" });
	// state = reducer(state, { type: "INC" });
	// state = reducer(state, { type: "INC" });

	// console.log(state)

	// Чистые функции

	// const rndSum = (a, b) => b + a // чистая, при вызове с одинаковыми параметрами всегда возвращает одинаковый результат. Побочные эффекты запрещены
	// console.log(rndSum(5, 10));
	// console.log(rndSum(5, 10));
	// console.log(rndSum(5, 10));

	return (
		<div>
			<button className='btn btn-warning'>INC</button>
			<button className='btn btn-danger'>DECR</button>
		</div>
	);
}

export default App;
