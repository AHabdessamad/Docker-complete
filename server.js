const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userTask = 'Read Docker Section!';

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
          <section>
            <h2>My Tasks</h2>
          </section>
          <form action="/store-task" method="POST">
          <div class="form-control">
          <label>Today Task</label>
          <input type="text" name="task">
          </div>
          <button>Set Today Task</button>
          </form>
          <section>
            <h3>${userTask}</h3>
          </section>
      </body>
    </html>
  `);
});

app.post('/store-task', (req, res) => {
  const enteredTask = req.body.task;
  userTask = enteredTask;
  res.redirect('/');
});

app.listen(24);
