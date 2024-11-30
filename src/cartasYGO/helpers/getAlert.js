
export const alert = (title,html,icon,timer = 2000) =>{
    return Swal.fire({
        title: title,
        html: html,
        icon: icon,
        timer: timer,
        timerProgressBar: true,
        showCancelButton: false,
        showConfirmButton: false
      });
}