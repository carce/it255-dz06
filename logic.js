window.addEventListener('load', e => {
    let logs = document.getElementById('logs')
    let realLog = console.log
    function log(text) {
        let p = document.createElement('p')
        p.appendChild(document.createTextNode(text))
        logs.insertBefore(p, logs.firstChild)
        realLog(text)
    }

    // log('Loaded')
    console.log = log
    init(log)
})

function init (log) {
    // 04c21a476319a670800b4892b4b16535
    $.getJSON('https://www.foaas.com/greed/BitCoin/me')
    .done(data => {
        log(data.subtitle)
        log(data.message)
    })

}
