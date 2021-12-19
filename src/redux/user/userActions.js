export const userLogin = () => {
    return (dispatch, getState) => {
        setTimeout(()=>{
            console.log(`action ready`);
            console.log(getState());
        }, 2000)
        // .then(() => {
        //     dispatch({
        //         type:'USER_LOGIN',
        //         payload: user
        //     })
        // })
    }
}