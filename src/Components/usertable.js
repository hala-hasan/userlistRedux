import React from 'react';
import './usertable.css';
import onChangeEvent from './onChangeEvent';
import Filter from './FilteredTable';

const Usertable = ({data, dispatch}) => {
    return (
        <>
        <div className="users">
            <div className="user-name">
                <span>User Name</span>
                <span>User Type</span>
                </div>
                {
                    data && data.map((item) =>
                        <div className='user-table' id={item.id}>
                            <select className='user-types' onChange={(e)=> onChangeEvent(e,data,dispatch)}>
                                <option value="Admin">Admin</option>
                                <option value="Editor">Editor</option>
                                <option value="Viewer">Viewer</option>
                                </select>
                            <p>{item.name}</p>
                        </div>)
                }
            </div>
            <div className='user-filtered'>
                  {( <Filter data={data}/> )}
                </div>
                </>
    )

};
export default Usertable;
