let input = document.querySelector(".input");
let image = document.querySelector(".img");

function generateQR(event) {
    event.preventDefault()

    let qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200×200&data=${input.value}`;

    image.className += " show"
    image.src = qrCode;
    input.value = ""
}

async function download(){
    let qr = await fetch(image.src);
    let blob = await qr.blob();
    let downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = new Date();
    downloadLink.click();
    // sweet alert
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Downloaded'
      })
    // console.log("downloaded")
}