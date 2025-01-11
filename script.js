// Simulasi Database untuk login
const users = {
    'marja group': { password: 'marja group', role: 'operator' },
    'tarmidi': { password: 'tarmidi', role: 'leader' }
};

// Fungsi Login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Trying to log in with:', username, password);  // Debugging login

    if (users[username] && users[username].password === password) {
        // Cek role user
        if (users[username].role === 'operator') {
            console.log('Login successful as operator');  // Debugging
            document.getElementById('loginForm').classList.add('hidden');
            document.getElementById('dashboard').classList.remove('hidden');
        } else if (users[username].role === 'leader') {
            console.log('Login successful as leader');  // Debugging
            document.getElementById('loginForm').classList.add('hidden');
            document.getElementById('leaderDashboard').classList.remove('hidden');
            loadDataForLeader();  // Menampilkan data dari banyak operator
        }
    } else {
        alert('Username atau Password salah');
    }
}

// Fungsi untuk submit data service oleh operator
function submitData() {
    const operatorName = document.getElementById('operatorName').value;
    const operatorId = document.getElementById('operatorId').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const kmService = document.getElementById('kmService').value;
    const firex25 = document.getElementById('firex25').value;
    const firex5 = document.getElementById('firex5').value;

    if (operatorName && operatorId && jobTitle && kmService && firex25 && firex5) {
        let operatorsData = JSON.parse(localStorage.getItem('operatorsData')) || [];
        operatorsData.push({ operatorName, operatorId, jobTitle, kmService, firex25, firex5 });
        localStorage.setItem('operatorsData', JSON.stringify(operatorsData));

        alert('Data berhasil disubmit');
        console.log('Data Operator:', { operatorName, operatorId, jobTitle, kmService, firex25, firex5 });
    } else {
        alert('Semua kolom harus diisi');
    }
}

// Fungsi untuk load data yang disubmit oleh banyak operator untuk leader
function loadDataForLeader() {
    const data = localStorage.getItem('operatorsData');
    const parsedData = data ? JSON.parse(data) : [];

    console.log('Data for leader:', parsedData);  // Debugging data

    if (parsedData.length > 0) {
        let leaderDataHTML = '<h3>Data Operator</h3>';
        parsedData.forEach((operator, index) => {
            leaderDataHTML += `
                <div>
                    <h4>Operator ${index + 1}</h4>
                    <p>Nama: ${operator.operatorName}</p>
                    <p>No. ID: ${operator.operatorId}</p>
                    <p>Job Title: ${operator.jobTitle}</p>
                    <p>Km / HM Service Berkala: ${operator.kmService}</p>
                    <p>Firex 25 kg: ${operator.firex25}</p>
                    <p>Firex 5 kg: ${operator.firex5}</p>
                    <hr>
                </div>
            `;
        });
        document.getElementById('leaderData').innerHTML = leaderDataHTML;
    } else {
        document.getElementById('leaderData').innerHTML = '<p>Belum ada data yang disubmit.</p>';
    }
}

// Fungsi Log Out
function logout() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('leaderDashboard').classList.add('hidden');
    alert('Anda berhasil logout');
}