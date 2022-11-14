import { toast } from 'react-toastify';

const successNotification = (mess) => {
    toast.success(mess, {
        position: toast.POSITION.TOP_RIGHT
    });
}

const errorNotification = (mess) => {
    toast.error(mess, {
        position: toast.POSITION.TOP_RIGHT
    });
}

const warningNotification = (mess) => {
    toast.warning(mess, {
        position: toast.POSITION.TOP_RIGHT
    });
}

export {
    successNotification,
    errorNotification,
    warningNotification,
}