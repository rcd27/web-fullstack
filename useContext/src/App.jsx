import React, {createContext, useContext, useState} from "react";

const ThemeContext = createContext(null);

function Form() {
    return (
        <Panel title="Welcome">
            <Button>Sign up</Button>
            <Button>Sign in</Button>
        </Panel>
    )
}

function Panel({title, children}) {
    const theme = useContext(ThemeContext);
    const className = 'panel' + theme;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({children}) {
    const theme = useContext(ThemeContext);
    const className = 'button' + theme;
    return (
        <button className={className}>
            {children}
        </button>
    )

}

export default function App() {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={theme}>
            <Form/>
            <label>
                <input
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={(e) => {
                        setTheme(e.target.checked ? 'dark' : 'light')
                    }}
                />
            </label>
        </ThemeContext.Provider>
    );
}

// Промисы и цепочки
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First')
    }, 1000)
})

let promise2 = (result) => {
    return new Promise((resolve, reject) => {
        resolve(result + ', second')
    })
}

let promise3 = (result) => {
    return new Promise((resolve, reject) => {
        reject(reject + 'fck off')
    })
}

promise1.then(promise2)
    .then(promise3)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })


