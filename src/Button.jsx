import className from 'classnames'

function Button ({children, outlineS, small, active, lightSettings, darkSettings,
                outlineP, lightButtonStart, downButton,
                lightButtonStop, darkButtonStart, 
                darkButtonStop, upBut, settingsButton,...rest} ) {

    const classes = className( rest.className, 'btn',{
        'btn-success' : lightSettings,
        'btn-warning': darkSettings,
        'btn-outline-success' : outlineS,
        'btn-outline-primary' : outlineP,
        'btn-sm': small,
        'active' : active,
        'upButtons' : upBut,
        'lightButtonStart': lightButtonStart,
        'lightButtonStop' : lightButtonStop,
        'darkButtonStart': darkButtonStart,
        'darkButtonStop' : darkButtonStop,
        'downButton': downButton,
        'settingsButton' : settingsButton,
    })


    return <button {...rest} className={classes}>{children}</button>
}

export default Button
