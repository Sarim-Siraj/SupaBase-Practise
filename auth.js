let SignEmail = document.getElementById('signup-email')
let SignPass = document.getElementById('signup-password')
let Signbtn = document.getElementById('btn')

let SigninEmail = document.getElementById('signin-email')
let SigninPass = document.getElementById('signin-password')
let Signinbtn = document.getElementById('signin-btn')



async function signUp() {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: SignEmail.value,
            password: SignPass.value,

        })
        console.log(data)
        if (error) throw error
        if (data) {
            alert('Please Check your email for confirmation')
            window.location.href = '/signin.html'
        }
        return data
    } catch (error) {
        console.log(error)

    }


}


if (Signbtn) {
    Signbtn.addEventListener("click", signUp);
}






async function signIn() {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: SigninEmail.value,
            password: SigninPass.value,
        })

        if (error) throw error
        if (data) {
            
            alert('Welcome')
            window.location.href = '/dashboard.html'
            console.log(data)
            
        }
        
        return data


    } catch (error) {
        console.log(error)
        alert(error.message)

    }

}

if (Signinbtn) {
    Signinbtn.addEventListener("click", signIn);
}





