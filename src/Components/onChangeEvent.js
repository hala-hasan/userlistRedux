const onChangeEvent = (e, data, dispatch) => {
    const userSelected= e.target.parentElement.getAttribute('id');
    const userVal = e.target.value;
    dispatch({
        type: 'CHANGE_USER_TYPE',
        payload: data,
        userSelected,
        userVal,
    })
}
export default onChangeEvent;