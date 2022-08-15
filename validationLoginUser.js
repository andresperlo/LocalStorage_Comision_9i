(function validarLogin(){
    const localSTGUsers = JSON.parse(localStorage.getItem('user')) || []
    const resultSearchUser = localSTGUsers.filter(data => data.stateLogin === true)

    if(resultSearchUser.length === 0){
        window.location.href = '/index.html'
    }
})()
