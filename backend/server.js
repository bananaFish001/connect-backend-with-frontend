import express from 'express'
const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready!')
});

// Get a list of 5 jokes
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1, 
            title: 'joke 1',
            content: 'lulz1'
        },
        {
            id: 2, 
            title: 'joke 2',
            content: 'lulz2'
        },
        {
            id: 3, 
            title: 'joke 3',
            content: 'lulz3'
        },
        {
            id: 3, 
            title: 'joke 3',
            content: 'lulz3'
        },
        {
            id: 4, 
            title: 'joke 4',
            content: 'lulz4'
        },
        {
            id: 5, 
            title: 'joke 5',
            content: 'lulz5'
        }
    ];

    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`The server is at http://localhost:${port}`)
})