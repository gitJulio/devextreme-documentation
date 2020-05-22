$(function () {
    $("#barGaugeContainer").dxBarGauge({
        startValue: 0,
        endValue: 200,
        values: [121.4, 135.4, 110.9, 141.1, 127.5],
        palette: 'Default',
        title: {
            text: 'Average Speed by Racer',
            subtitle: {
                text: '(estimated in km/h)',
                font: {
                    weight: 100
                }
            }
        }
    });
});