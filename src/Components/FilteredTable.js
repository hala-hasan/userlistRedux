import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './usertable.css';
function Filter(props) {
    const filter = useSelector(state => state.filteredTable);
    const dispatch = useDispatch();
    console.log(filter);

    return (
        <div className='fitlered-wrapper'>
                <div className='fliterd-table'>
                    <button
                        onClick={() => {
                            dispatch({
                                type: 'GET_USER_TYPES',
                                payload: props.data,
                                userVal: 'Admin'});
                                  }}
                                    >Admin</button>

                    <button
                    onClick={() => {
                        dispatch({
                        type: 'GET_USER_TYPES',
                        payload: props.data,
                        userVal: 'Editor'
                    });
                    }}>Editor</button>

                    <button
                    onClick={() => {
                        dispatch({
                        type: 'GET_USER_TYPES',
                        payload: props.data,
                        userVal: 'Viewer'
                    });
                    }}>Viewer</button>
                </div>
            { <div>
                {filter.map(item => {
                return <p className="user-filterd">{item.name}</p>}
                )
                }
            </div> }
</div>
            )
}

export default Filter
