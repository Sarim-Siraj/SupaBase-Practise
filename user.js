let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let company = document.getElementById("company");
let address = document.getElementById("address");
let email = document.getElementById("email");

let addUserBtn = document.getElementById("add-user");
let userTableBody = document.getElementById("user_table_body");

async function adduser() {
    try {
        const { error } = await supabase
            .from('user')
            .insert({
                first_name: firstName.value,
                last_name: lastName.value,
                company: company.value,
                address: address.value,
                email: email.value,
            })

        if (error) throw error
     
            alert("add")
            getUsers();
            
        


    } catch (error) {
        console.log(error);
        alert(error.message)

    }

}

async function getUsers(){
    try {
        const { data,error } = await supabase.from("user").select();
        if (error) throw error;

    userTableBody.innerHTML = ''

    if (data) {
      data.map((val, index) => {
        return (userTableBody.innerHTML += `
     <tr>
                        <td scope="col">${val.first_name}</td>
                        <td scope="col">${val.last_name}</td>
                        <td scope="col">${val.company}</td>
                        <td scope="col">${val.email}</td>
                        <td scope="col">${val.address}</td>
                        <td> <span> <i id="delete_user" onclick="deleteUser(${val.id})" class="fa-solid fa-trash"></i> </span> </td>
                      </tr>
    `);
      });
    }

    } catch (error) {
        console.log(error);
    }
}

window.onload = getUsers();

if (addUserBtn) {
    addUserBtn.addEventListener("click", adduser)
}