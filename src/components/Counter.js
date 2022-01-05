import { connect, useSelector, useDispatch } from "react-redux";
// import * as actions from '../actions'
import {inc, dec, rnd} from '../actions'
// import { bindActionCreators } from "redux";


const Counter = () => {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();





    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={()=> dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={()=> dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={()=> dispatch(rnd())} className="btn btn-primary">RND</button>
        </div>
    )
}

// const mapStateToProps = (state) =>{ // чистая и синхронная, возвращает объект со стейтом
// 	return {
// 		counter: state.value
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators(actions, dispatch)
// }
// const mapDispatchToProps = (dispatch) => {
// 	const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
// 	return {
// 		inc,
// 		dec,
// 		rnd: ()=>{
// 			const value = Math.floor(Math.random() * 10)
// 			rnd(value)}

// 	}
// }

// export default connect(mapStateToProps, actions)(Counter);
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter