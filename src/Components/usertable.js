import React from 'react';
import './usertable.css';

const Usertable = (props) => {
    return (
        <div className="users">
            <div className="user-name">
                <span>User Name</span>
                <span>User Type</span>
                </div>
                {
                    props.data && props.data.map((item) =>
                        <div className='user-table'>
                            <select className='user-types'>
                                <option value="Admin">Admin</option>
                                <option value="Editor">Editor</option>
                                <option value="Viewer">Viewer</option>
                            </select>
                            <p>{item.name}</p>
                        </div>)
                }
            </div>
    )

};
export default Usertable;
