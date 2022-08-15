function register() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const validPass = document.getElementById('validPass').value
    const localSTGUsers = JSON.parse(localStorage.getItem('user')) || []
    const resultSearchUser = localSTGUsers.filter(data => data.user === user)
    const arrayUser = []
    let stateLogin = false

    for (let i = 0; i < localSTGUsers.length; i++) {
        const element = localSTGUsers[i];
        arrayUser.push(element)
    }

    if (resultSearchUser.length === 0) {
        pass === validPass ? arrayUser.push({ user, pass, stateLogin, id: arrayUser.length + 1, role: 'user' }) : alert('contraseña no son iguales')
        localStorage.setItem('user', JSON.stringify(arrayUser))
    } else {
        alert('usuario incorrecto')
    }
}

/* -----------------------------Fin de Rergister--------------------------------- */

function login() {

    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    const localSTGUsers = JSON.parse(localStorage.getItem('user')) || []
    const arrayUser = []

    for (let i = 0; i < localSTGUsers.length; i++) {
        const element = localSTGUsers[i];
        if (element.user !== user) {
            arrayUser.push(element)
        }
    }

    const resultSearchUser = localSTGUsers.filter(data => data.user === user)
    const role = resultSearchUser[0].role

    if (resultSearchUser.length === 1) {
        resultSearchUser[0].stateLogin = true
        arrayUser.push(...resultSearchUser)
        localStorage.setItem('user', JSON.stringify(arrayUser))
        localStorage.setItem('id', JSON.stringify(resultSearchUser[0].id))

        resultSearchUser[0].pass === pass
            ?
            setTimeout(() => {
                role === 'admin'
                ?
                window.location.href = '/admin.html'
                :
                window.location.href = '/home.html'
            }, 3000)
            :
            alert('contraseña incorrecta')
    } else {
        alert('usuario incorrecto')
    }
}

/* -----------------------------Fin de Login--------------------------------- */

function logout() {

    const localSTGUsers = JSON.parse(localStorage.getItem('user')) || []
    const idStorage = localStorage.getItem('id')
    const resultSearchUser = localSTGUsers.filter(data => data.id === Number(idStorage)) 
    const arrayUser = []

    for (let i = 0; i < localSTGUsers.length; i++) {
        const element = localSTGUsers[i];
        if (element.user !== resultSearchUser[0].user) {
            arrayUser.push(element)
        }
    }

    if (resultSearchUser.length === 1) {
        resultSearchUser[0].stateLogin = false
        arrayUser.push(...resultSearchUser)

        localStorage.setItem('user', JSON.stringify(arrayUser))
        localStorage.removeItem('id')

        setTimeout(() => {
            window.location.href = '/index.html'
        }, 3000)

    }
}
