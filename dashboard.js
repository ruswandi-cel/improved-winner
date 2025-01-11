const userRole = localStorage.getItem("userRole");
const userName = localStorage.getItem("userName");

document.getElementById("user-name").textContent = userName;
document.getElementById("user-role").textContent = userRole;

if (userRole === "operator") {
    document.getElementById("operator-section").style.display = "block";

    const serviceForm = document.getElementById("service-form");
    serviceForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const att = document.getElementById("att").value;
        const service = document.getElementById("service").value;
        const firex25kg = document.getElementById("firex25kg").value;
        const firex5kg = document.getElementById("firex5kg").value;

        const laporanSebelumnya = JSON.parse(localStorage.getItem("laporan")) || [];

        const laporanBaru = {
            operator: userName,
            att,
            service,
            firex25kg,
            firex5kg,
        };
        laporanSebelumnya.push(laporanBaru);

        localStorage.setItem("laporan", JSON.stringify(laporanSebelumnya));
        alert("Laporan berhasil disimpan!");
        serviceForm.reset();
    });
}
if (userRole === "operator") {
    document.getElementById("operator-section").style.display = "block";

    const serviceForm = document.getElementById("service-form");
    serviceForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const att = document.getElementById("att").value;
        const service = document.getElementById("service").value;
        const firex25kg = document.getElementById("firex25kg").value;
        const firex5kg = document.getElementById("firex5kg").value;

        const laporanSebelumnya = JSON.parse(localStorage.getItem("laporan")) || [];

        const laporanBaru = {
            operator: userName,
            att,
            service,
            firex25kg,
            firex5kg,
        };

        laporanSebelumnya.push(laporanBaru);
        localStorage.setItem("laporan", JSON.stringify(laporanSebelumnya));

        alert("Laporan berhasil disimpan!");
        serviceForm.reset();
    });
}

if (userRole === "leader") {
    document.getElementById("leader-section").style.display = "block";

    const laporanSebelumnya = JSON.parse(localStorage.getItem("laporan")) || [];
    const reportContainer = document.getElementById("report-container");

    if (laporanSebelumnya.length > 0) {
        laporanSebelumnya.forEach((laporan, index) => {
            const laporanDiv = document.createElement("div");
            laporanDiv.innerHTML = `
                <h4>Laporan ${index + 1}</h4>
                <p>Operator: ${laporan.operator}</p>
                <p>Job Title: ${laporan.att}</p>
                <p>Km/Hm Service: ${laporan.service}</p>
                <p>Firex 25kg: ${laporan.firex25kg}</p>
                <p>Firex 5kg: ${laporan.firex5kg}</p>
                <hr>
            `;
            reportContainer.appendChild(laporanDiv);
        });
    } else {
        reportContainer.innerHTML = "<p>Belum ada laporan.</p>";
    }
}
if (userRole === "leader") {
    document.getElementById("leader-section").style.display = "block";

    const laporanSebelumnya = JSON.parse(localStorage.getItem("laporan")) || [];
    const reportContainer = document.getElementById("report-container");

    if (laporanSebelumnya.length > 0) {
        laporanSebelumnya.forEach((laporan, index) => {
            const laporanDiv = document.createElement("div");
            laporanDiv.innerHTML = `
                <h4>Laporan ${index + 1}</h4>
                <p>Operator: ${laporan.operator}</p>
                <p>Job Title: ${laporan.att}</p>
                <p>Km/Hm Service: ${laporan.service}</p>
                <p>Firex 25kg: ${laporan.firex25kg}</p>
                <p>Firex 5kg: ${laporan.firex5kg}</p>
                <hr>
            `;
            reportContainer.appendChild(laporanDiv);
        });
    } else {
        reportContainer.innerHTML = "<p>Belum ada laporan.</p>";
    }
}

document.getElementById("logout").addEventListener("click", function () {
    localStorage.clear();
    window.location.href = "login.html";
});