const ctx = document.getElementById('realtimeChart').getContext('2d');

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['10:00', '10:01', '10:02', '10:03', '10:04'],
    datasets: [{
      label: '센서 값',
      data: [12, 15, 14, 18, 20],
      borderColor: '#007aff',
      backgroundColor: 'rgba(0, 122, 255, 0.15)',
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 13
          }
        }
      }
    },
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
          text: '센서 값'
        },
        beginAtZero: true
      }
    }
  }
});
