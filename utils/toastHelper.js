import { toast } from 'react-toastify';

export const show = (type, message, duration = 3000) => {
  const id = `${type}-${message}`;

 
  if (toast.isActive(id)) return;

  const options = {
    autoClose: duration,
    closeButton: true,
    toastId: id,
  };

  switch (type) {
    case 'success':
      toast.success(message, options);
      break;
    case 'error':
      toast.error(message, options);
      break;
    case 'info':
      toast.info(message, options);
      break;
    case 'warn':
    case 'warning':
      toast.warn(message, options);
      break;
    default:
      toast(message, options);
  }
};
