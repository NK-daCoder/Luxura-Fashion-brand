document.addEventListener("DOMContentLoaded", () => {
    mainProgram();
});

function chart() {
    const chartStatus = Chart.getChart("myChart");

    if (chartStatus != undefined) { 
        chartStatus.destroy();
    }

    const ctx = document.getElementById('myChart').getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'lightblue');
    gradient.addColorStop(1, 'blue');

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [12, 19, 16, 2, 25, 20],
            backgroundColor: gradient,
            borderColor: 'blue',
            borderWidth: 1,
            borderRadius: 20
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
        plugins: [{
            beforeDraw: (chart) => {
                const ctx = chart.ctx;
                const chartArea = chart.chartArea;
                const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                gradient.addColorStop(0, 'lightblue');
                gradient.addColorStop(1, 'blue');

                chart.data.datasets[0].backgroundColor = gradient;
            }
        }]
    };

    const myChart = new Chart(ctx, config);
}

function showPage(page) {
    document.querySelectorAll('.admin-main__dashBoard-one').forEach((sections) => {
        sections.style.display = "none";
    });

    document.querySelector(`#${page}`).style.display = "block";
}

function mainProgram() {
    const dashboardBtns = document.querySelectorAll(".dash-btn");

    // Initialize chart outside the button loop
    chart(); 

    dashboardBtns.forEach((button) => {
        button.addEventListener("click", function() {
            // Remove active class from all buttons
            dashboardBtns.forEach((btn) => {
                btn.classList.remove("btn-styling--active");
            });

            // Add active class to the clicked button
            button.classList.add("btn-styling--active");
        });

        button.onclick = function() {
            showPage(this.dataset.page);
        }
    });


}

