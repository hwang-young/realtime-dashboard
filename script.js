const ctx = document.getElementById('realtimeChart').getContext('2d');

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: '센서 값',
      data: [],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: '시간'
        }
      },
      y: {
        title: {
          display: true,
          text: '값'
        },
        beginAtZero: true
      }
    }
  }
});
