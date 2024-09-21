
/* ==================================== Charts ======================================== */
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('myChart').getContext('2d');

        // Create a gradient for the bars
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'lightblue');
        gradient.addColorStop(1, 'blue');

        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [12, 19, 16, 2, 25, 20],
                backgroundColor: gradient, // Apply the gradient to the background
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
                    const ctx = chart.ctx; // Get chart's drawing context
                    const chartArea = chart.chartArea; // Get chart dimensions
                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, 'lightblue');
                    gradient.addColorStop(1, 'blue');

                    chart.data.datasets[0].backgroundColor = gradient; // Set the gradient to the dataset
                }
            }]
        };

        const myChart = new Chart(ctx, config);
});
