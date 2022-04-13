// Script to change Header name
function changeHeader(header_name) {
    document.getElementById("heading-txt").innerHTML = header_name;
}


function setWorkCompletion() {

    var options = {
        useEasing: true,
        useGrouping: true,
        prefix: '',
        suffix: '%'
    };

    var count = new CountUp("percent", 65, 100, 0, 10, options);
    count.start();

    var count2 = new CountUp("percent2", 32, 100, 0, 10, options);
    count2.start();

    var count3 = new CountUp("percent3", 32, 100, 0, 10, options);
    count3.start();

    var count4 = new CountUp("percent4", 77, 100, 0, 10, options);
    count4.start();

    var count5 = new CountUp("percent5", 42, 100, 0, 10, options);
    count5.start();

    var count6 = new CountUp("percent6", 41, 100, 0, 10, options);
    count6.start();

    var count7 = new CountUp("total", 56, 100, 0, 10, options);
    count7.start();

}

function doWork() {

    setTimeout(function() {
        setWorkCompletion();
    }, 10000);

}