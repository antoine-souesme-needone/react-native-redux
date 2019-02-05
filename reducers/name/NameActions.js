import { NAME_CHANGE_NAME } from "../types";

export const changeName = (newName) => (
    {
        type: NAME_CHANGE_NAME,
        payload: newName,
        anotherData: { data: `I am data !` },
        andAnother: `Je s'appelle Groot`
    }
)

export const asyncNameAction = () => {
    return async dispatch => {
        try {
            console.log('waiting ...');

            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, 2500);
            })

            dispatch(asyncNameActionSuccess({ 'hello': 'world' }))

        } catch (error) {

            // Here we should dispatch to another action that handles errors
            // Like fetchConnectedError

            console.log(error);
        }
    }
}

export const asyncNameActionSuccess = (value) => (
    {
        description: 'Description of the action',
        type: NAME_ASYNC_ACTION_SUCCESS,
        payload: value
    }
)