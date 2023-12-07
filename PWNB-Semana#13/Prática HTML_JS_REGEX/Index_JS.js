document.getElementById('clientForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const cep = document.getElementById('cep').value;


    const client = {
        name,
        email,
        phone,
        cep

    };

    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.push(client);
    localStorage.setItem('clients', JSON.stringify(clients));


    document.getElementById('clientForm').reset();
});


document.getElementById('listClients').addEventListener('click', function () {
    document.getElementById('clientsList').style.display = 'block';
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const clientsUl = document.getElementById('clientsUl');
    clientsUl.innerHTML = '';

    clients.forEach(client => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${client.name} - ${client.email}`));

        const editButton = document.createElement('button');
        editButton.appendChild(document.createTextNode('Editar'));
        editButton.addEventListener('click', function () {

        });

        const deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('Excluir'));
        deleteButton.addEventListener('click', function () {

            clients.splice(clients.indexOf(client), 1);
            localStorage.setItem('clients', JSON.stringify(clients));
            li.remove();
        });

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        clientsUl.appendChild(li);
    });
});


document.getElementsByClassName('close')[0].addEventListener('click', function () {
    document.getElementById('clientsList').style.display = 'none';
});
